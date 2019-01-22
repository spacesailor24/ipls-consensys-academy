import "@babel/polyfill";
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import getWeb3 from "./utils/getWeb3";
// import DidRegistryContract from 'ethr-did-registry';
import DIDRegistryContract from '../build/contracts/EthereumDIDRegistry.json';
import EthrDID from "ethr-did";
import DIDJWT from 'did-jwt';
import DIDResolver from 'did-resolver';
import registerResolver from 'ethr-did-resolver'

import "./App.css";

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            keyPair: EthrDID.createKeyPair(),
            ethrDid: null
        }
    }

    async componentWillMount() {
        try {
            // Get network provider and web3 instance.
            const web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = DIDRegistryContract.networks[networkId];
            const DidReg = new web3.eth.Contract(
                DIDRegistryContract.abi,
                deployedNetwork && deployedNetwork.address,
            );

            // console.log(DidReg);

            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            this.setState({...this.state, web3, accounts, contracts: {
                DidReg
            }});
        } catch (error) {
            // Catch any errors for any of the above operations.
            console.error(error);
        }

        console.log(this.state.contracts.DidReg.options.address);
        this.state.contracts.DidReg.methods.identityOwner(this.state.keyPair.address).call({from: this.state.keyPair.address}, function(err, result) {
            console.log('RESULT', result);
        });

        this.state.contracts.DidReg.methods.identityOwner(this.state.accounts[0]).call({from: this.state.accounts[0]}, function(err, result) {
            console.log('RESULT 3', result);
        });

        console.log('THIS', this.state.web3.utils.toHex('myvalue'));

        await this.state.web3.eth.personal.unlockAccount(this.state.accounts[0], '', 1000000000);
        const tx = await this.state.contracts.DidReg.methods.setAttribute(
            this.state.accounts[0],
            this.stringToBytes('mykey'),
            this.stringToBytes('myvalue'),
            86400,
        ).send({ from: this.state.accounts[0] }, result => result);
        console.log('tx', tx);
        console.log(this.bytes32ToString(tx.events.DIDAttributeChanged.returnValues.name));
        console.log(this.bytes32ToString(tx.events.DIDAttributeChanged.returnValues.value));
    };

    getBlock(blockNumber) {
        return new Promise((resolve, reject) => {
            web3.eth.getBlock(blockNumber, (error, block) => {
                if (error) return reject(error);
                resolve(block);
            });
        });
    }

    stringToBytes(str) {
        return this.state.web3.utils.hexToBytes(this.state.web3.utils.toHex(str));
    }

    bytes32ToString(bytes) {
        return Buffer.from(bytes.slice(2).split("00")[0], "hex").toString();
    }

    stringToBytes32(str) {
        const buffstr = Buffer.from(str).toString("hex");
        return buffstr + "0".repeat(64 - buffstr.length);
    }

    async generateEthrDid() {
        const signer = DIDJWT.SimpleSigner(this.state.keyPair.privateKey);

        const ethrDid = new EthrDID({
            address: this.state.keyPair.address,
            registry: this.state.contracts.DidReg.options.address,
            provider: this.state.web3.currentProvider,
            signer: signer
        });
        console.log('ethrDid', ethrDid);

        await registerResolver();

        const doc = await DIDResolver(ethrDid.did);
        console.log('doc', doc);

        const jwt = await DIDJWT.createJWT(
            {aud: ethrDid.did, exp: 1957463421, name: 'Testing this'},
            {issuer: ethrDid.did, signer}).then(response => response);

        console.log('jwt', jwt);

        const decoded = await DIDJWT.decodeJWT(jwt);
        console.log('decoded', decoded);

        let verifiedResponse = await DIDJWT.verifyJWT(jwt, {audience: ethrDid.did}).then(response => response);
        console.log('verifiedResponse', verifiedResponse);
    }

    render(){
        if (!this.state.web3) {
            return <div>Loading Web3, accounts, and contract...</div>;
        }

        return(
            <div className="App">
                <h1>Inter Planetary Look-up Service</h1>
                <p>{this.state.accounts[0]}</p>
                <p>Address: {this.state.keyPair.address}</p>
                <p>Private Key: {this.state.keyPair.privateKey}</p>
                <button onClick={this.generateEthrDid.bind(this)}>Click to generate EthrDid</button>
            </div>
        );
    }
}

export default hot(module)(App);
