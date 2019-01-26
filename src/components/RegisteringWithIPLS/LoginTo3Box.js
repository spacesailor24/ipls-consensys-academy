import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThreeBox from "3box";
import { set3BoxProfile, setIsLoggedInto3Box } from "../../redux/actions";

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        threeBoxProfile: state.threeBoxProfile,
        isLoggedInTo3Box: state.isLoggedInTo3Box,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        set3BoxProfile: threeBoxProfile => dispatch(set3BoxProfile(threeBoxProfile)),
        setIsLoggedInto3Box: isLoggedInTo3Box => dispatch(setIsLoggedInto3Box(isLoggedInTo3Box)),
    }
}

class ConnectedLoginTo3Box extends Component {
    constructor(props) {
        super(props);
        this.logInto3Box = this.logInto3Box.bind(this);
    }

    async logInto3Box() {
        try {
            const threeBoxProfile = await ThreeBox.getProfile(this.props.accounts[0]);

            this.props.set3BoxProfile(threeBoxProfile);
            this.props.setIsLoggedInto3Box(true);
        } catch(e) {
            console.log('logInto3Box Error:', e);
        }
    }

    render() {
        return(
            <div className="box has-text-centered">
                <p>In order to use IPLS, you must first connect to Web3 and login to your 3Box Profile.</p>

                <br/>

                <div className="columns is-vcentered">
                    <div className="column is-8">
                        <span className="is-pulled-right">Use Ethereum account: {this.props.accounts[0]} to</span>
                    </div>

                    <div className="column">
                        <span onClick={this.logInto3Box} className="is-pulled-left">
                          <a className="button">
                            <span>Login to 3Box</span>
                          </a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

const LoginTo3Box = connect(mapStateToProps, mapDispatchToProps)(ConnectedLoginTo3Box);

export default LoginTo3Box;