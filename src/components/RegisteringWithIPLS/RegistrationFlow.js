import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    set3BoxProfile,
    setAccounts,
    setContracts,
    setRegisteredUser,
} from "../../redux/actions";

import ThreeBox from "3box";
import { has, isEmpty } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

import UsernameAvailability from "./UsernameAvailability";
import AddingUsernameTo3BoxProfile from "./AddingUsernameTo3BoxProfile";
import UserHasBeenRegistered from "./UserHasBeenRegistered";

import { stringToBytes } from "../../utils/contractHelpers";

const mapStateToProps = state => {
    return {
        web3: state.web3,
        accounts: state.accounts,
        threeBoxProfile: state.threeBoxProfile,
        contracts: state.contracts,
        registeredUser: state.registeredUser
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setAccounts: accounts => dispatch(setAccounts(accounts)),
        set3BoxProfile: threeBoxProfile => dispatch(set3BoxProfile(threeBoxProfile)),
        setContracts: contracts => dispatch(setContracts(contracts)),
        setRegisteredUser: registeredUser => dispatch(setRegisteredUser(registeredUser))
    }
}

class ConnectedRegistrationFlow extends Component {
    constructor(props) {
        super(props);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.registerUsername = this.registerUsername.bind(this);

        this.state = {
            username: '',
            usernameSearchIsLoading: false,
            userNameIsTaken: null,
            registeringUser: false,
            addingUsernameTo3BoxProfile: false,
            usernameHasBeenAddedTo3BoxProfile: false
        };

        this.timeout = 0;
    }

    async checkUsernameIsTaken(username) {
        try {
            return await this.props.contracts.usernameToken.methods.isUsernameTaken(stringToBytes(username)).call({from: this.props.accounts[0]})
        } catch(e) {
            console.log('err', e);
        }
    }

    handleUsernameChange(event) {
        this.setState({...this.state, usernameSearchIsLoading: true});

        const username = event.target.value;

        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(async () => {
            const userNameIsTaken = await this.checkUsernameIsTaken(username);
            this.setState({
                ...this.state,
                userNameIsTaken: username === '' ? null : userNameIsTaken,
                username,
                usernameSearchIsLoading: false
            });
        });
    }

    async users3BoxFinishedSyncing(users3Box) {
        await users3Box.public.set('ipls.username', this.props.registeredUser.username);
        this.setState({...this.state, addingUsernameTo3BoxProfile: false, usernameHasBeenAddedTo3BoxProfile: true})
    }

    async addUsernameTo3BoxProfile() {
        try {
            this.setState({...this.state, addingUsernameTo3BoxProfile: true});
            const users3Box = await ThreeBox.openBox(this.props.accounts[0], this.props.web3.currentProvider);
            users3Box.onSyncDone(() => {
                this.users3BoxFinishedSyncing(users3Box);
            });
        } catch(e) {
            console.log('addUsernameTo3BoxProfile Error:', e);
        }
    }

    async registerUsername() {
        this.setState({...this.state, registeringUser: true});
        const username = this.state.username;
        const threeBoxDID = this.props.threeBoxProfile.ethereum_proof.linked_did;

        try {
            const res = await this.props.contracts.usernameToken.methods
                .registerUsername(
                    stringToBytes(username),
                    stringToBytes(threeBoxDID)
                ).send({from: this.props.accounts[0]});
            console.log(res);

            if (has(res.events, 'Transfer')) {
                this.props.setRegisteredUser({username, threeBoxDID});
                this.setState({...this.state, username: '', registeringUser: false});
                this.addUsernameTo3BoxProfile();
            }
        } catch(e) {
            console.log('registerUsername Error:', e);
        }
    }

    render() {
        let usernameAvailability;
        let registerUsernameButton;
        let userHasBeenRegistered;
        let addingUsernameTo3BoxProfile;

        if (!isEmpty(this.state.username)) {
            usernameAvailability = <UsernameAvailability username={this.state.username} userNameIsTaken={this.state.userNameIsTaken}/>;
        }

        if (!isEmpty(this.state.username) && !this.state.userNameIsTaken) {
            registerUsernameButton = <a
                onClick={this.registerUsername}
                className="button is-fullwidth is-success is-outlined">Register Username</a>;
        }

        if (this.props.registeredUser !== null) {
            userHasBeenRegistered= <UserHasBeenRegistered registeredUser={this.props.registeredUser}/>;
            addingUsernameTo3BoxProfile = <AddingUsernameTo3BoxProfile
                addingUsernameTo3BoxProfile={this.state.addingUsernameTo3BoxProfile}
                usernameHasBeenAddedTo3BoxProfile={this.state.usernameHasBeenAddedTo3BoxProfile}/>;
        }

        return (
            <div>
                <div className="box has-text-centered">
                    <p>When you created an account with 3Box, you were assigned a DID (Decentralized Identifier) that is completely unqiue to your Ethereum address.</p>

                    <br/>

                    <p>Your DID looks like this:</p>

                    <br/>

                    <p>{this.props.threeBoxProfile.ethereum_proof.linked_did}</p>
                </div>

                <div className="box has-text-centered">
                    <p>Using the UsernameToken contract that IPLS utilizes, you can register your DID with a username.</p>

                    <br/>

                    <p>After registering a username with you 3Box DID, you, and anyone you tell your username to, will be able to visit http://ipls.io/your-username and see your Ethereum profile.</p>
                </div>

                <div className="box has-text-centered">
                    {
                        this.state.registeringUser ?
                            <div className="columns">
                                <div className="column is-offset-5"></div>
                                <div className="column">
                                    <div className="spinner"></div>
                                </div>
                                <div className="column is-offset-5"></div>
                            </div> :
                            <span>
                                <p>Now the fun part...</p>

                                <br/>

                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Your Desired Username</label>
                                    </div>

                                    <div className="field-body">
                                        <div className="field">
                                            <p className={`control has-icons-left ${this.state.usernameSearchIsLoading ? 'is-loading' : ''}`}>
                                                <span className="icon is-left">
                                                  <FontAwesomeIcon icon={faEthereum}/>
                                                </span>
                                                <input
                                                    type="text"
                                                    className={
                                                        `input ${this.state.userNameIsTaken ? 'is-danger' : ''}
                                                        ${!this.state.userNameIsTaken && !isEmpty(this.state.username) ? 'is-success' : ''}
                                                    `}
                                                    value={this.state.username} onChange={this.handleUsernameChange}/>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                        {usernameAvailability}

                                        <br/>

                                        {registerUsernameButton}
                            </span>
                    }

                </div>

                {userHasBeenRegistered}

                {addingUsernameTo3BoxProfile}
            </div>
        )
    }
}

const RegistrationFlow = connect(mapStateToProps, mapDispatchToProps)(ConnectedRegistrationFlow);

export default RegistrationFlow;