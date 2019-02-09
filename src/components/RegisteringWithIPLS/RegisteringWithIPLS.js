import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWeb3, setAccounts, setContracts } from "../../redux/actions/index";

import { isEmpty, has } from 'lodash';

import UsernameToken from '../../../build/contracts/UsernameToken';

import RegistrationRequirements from './RegistrationRequirements';
import LoginTo3Box from './LoginTo3Box';
import IsLoggedInto3Box from './IsLoggedInto3Box';
import RegistrationFlow from "./RegistrationFlow";

import getWeb3 from '../../utils/getWeb3';
import IplsConnectMetamask from "../../images/ipls-connect-metamask.png";

const mapStateToProps = state => {
    return {
        web3: state.web3,
        accounts: state.accounts,
        isLoggedInTo3Box: state.isLoggedInTo3Box,
        threeBoxProfile: state.threeBoxProfile,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setWeb3: web3 => dispatch(setWeb3(web3)),
        setAccounts: accounts => dispatch(setAccounts(accounts)),
        setContracts: contracts => dispatch(setContracts(contracts)),
    }
}

class ConnectedRegisteringWithIPLS extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        try {
            if (this.props.web3 === null) {
                const web3 = await getWeb3();
                this.props.setWeb3(web3);
            }

            if (isEmpty(this.props.accounts)) {
                const accounts = await this.props.web3.eth.getAccounts();
                this.props.setAccounts(accounts);
            }

            const networkId = await this.props.web3.eth.net.getId();
            const usernamtDeployedNetwork = UsernameToken.networks[networkId];
            const usernameToken = new this.props.web3.eth.Contract(
                UsernameToken.abi,
                usernamtDeployedNetwork && usernamtDeployedNetwork.address,
            );

            this.props.setContracts({usernameToken});
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        if (!this.props.web3) {
            return <section>
                <div className="container">
                    <div className="box has-text-centered">
                        <h5>Loading Web3, accounts, and contracts...</h5>

                        <hr/>

                        <div className="columns is-vcentered">
                            <div className="column is-four-fifths">
                                <p>If you're using Metamask as your Web3 Provider, please allow this dApp to connect to it.</p>
                            </div>

                            <div className="column">
                                <figure className="image">
                                    <img src={IplsConnectMetamask} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        }

        let isLoggedInto3Box;
        let registrationFlow;

        if (this.props.isLoggedInTo3Box) {
            isLoggedInto3Box = <IsLoggedInto3Box threeBoxProfile={this.props.threeBoxProfile}/>;
            registrationFlow = <RegistrationFlow/>;
        }

        return(
            <section>
                <div className="container">
                    <RegistrationRequirements/>

                    <LoginTo3Box/>

                    {isLoggedInto3Box}

                    {registrationFlow}
                </div>
            </section>
        );
    }
}

const RegisteringWithIPLS = connect(mapStateToProps, mapDispatchToProps)(ConnectedRegisteringWithIPLS);

export default RegisteringWithIPLS;