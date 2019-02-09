import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAccounts, setContracts, setWeb3, setSearchUserProfile } from "../../redux/actions";

import MuPort from 'muport-core';
import ThreeBox from "3box";
import { isEmpty } from "lodash";

import UsernameToken from "../../../build/contracts/UsernameToken";

import getWeb3 from "../../utils/getWeb3";
import { stringToBytes } from "../../utils/contractHelpers";

const mapStateToProps = state => {
    return {
        web3: state.web3,
        accounts: state.accounts,
        contracts: state.contracts,
        isLoggedInTo3Box: state.isLoggedInTo3Box,
        threeBoxProfile: state.threeBoxProfile,
        searchedUserProfile: state.searchedUserProfile
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setWeb3: web3 => dispatch(setWeb3(web3)),
        setAccounts: accounts => dispatch(setAccounts(accounts)),
        setContracts: contracts => dispatch(setContracts(contracts)),
        setSearchUserProfile: searchUserProfile => dispatch(setSearchUserProfile(searchUserProfile))
    }
}

class ConnectedProfileDetails extends Component {
    constructor(props) {
        super(props);

        this.getUsernamesDID = this.getUsernamesDID.bind(this);
        this.getUsers3BoxProfile = this.getUsers3BoxProfile.bind(this);
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

            const users3BoxProfile = await this.getUsers3BoxProfile();
            this.props.setSearchUserProfile(users3BoxProfile);
            console.log(this.props.searchedUserProfile);
        } catch (error) {
            console.error(error);
        }
    }

    async getUsernamesDID() {
        try {
            return await this.props.contracts.usernameToken.methods
                .usernameToDid(stringToBytes(this.props.username)).call({from: this.props.accounts[0]})
        } catch(e) {
            console.log('getUsernamesDID Error:', e);
        }
    }

    async getUsers3BoxProfile() {
        const usersDIDHex = await this.getUsernamesDID();
        const usersDID = this.props.web3.utils.hexToUtf8(usersDIDHex);
        const identityDocument = await MuPort.resolveIdentityDocument(usersDID);
        return await ThreeBox.getProfile(identityDocument.managementKey);
    }

    render() {
        let profileCard;
        let profileImage;
        let backgroundImage;

        if (!isEmpty(this.props.searchedUserProfile)) {
            profileCard = <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={`https://gateway.ipfs.io/ipfs/${this.props.searchedUserProfile.coverPhoto[0].contentUrl['/']}`} alt="User background image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={`https://gateway.ipfs.io/ipfs/${this.props.searchedUserProfile.image[0].contentUrl['/']}`} alt="User profile image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{this.props.searchedUserProfile.name}</p>
                            <p className="subtitle is-6">{this.props.searchedUserProfile['ipls.username']}</p>
                        </div>
                    </div>

                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>

            backgroundImage = <img src={`https://gateway.ipfs.io/ipfs/${this.props.searchedUserProfile.coverPhoto[0].contentUrl['/']}`} alt="User background image" />

            profileImage = <img src={`https://gateway.ipfs.io/ipfs/${this.props.searchedUserProfile.image[0].contentUrl['/']}`} alt="User profile image" />
        }

        return (
            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-4 box">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-128x128">
                                    {profileImage}
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{this.props.searchedUserProfile.name} {this.props.searchedUserProfile.emoji}</p>
                                <p className="subtitle is-6">{this.props.searchedUserProfile['ipls.username']}</p>
                                <p className="subtitle is-6">{this.props.searchedUserProfile.location}</p>
                                <p className="subtitle is-6">{this.props.searchedUserProfile.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const ProfileDetails = connect(mapStateToProps, mapDispatchToProps)(ConnectedProfileDetails);

export default ProfileDetails;