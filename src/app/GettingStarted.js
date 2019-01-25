import React from 'react';
import ThreeBoxCreateAccountPage from '../images/3box-create-account-page.png';
import ThreeBoxSharingAccountRequest from '../images/3box-sharing-account-request.png';
import PendingMetaMaskShareRequest from '../images/pending-metamask-share-request.png';
import MetamaskSignatureRequest from '../images/metamask-signature-request.png';
import Blank3BoxAccount from '../images/blank-3box-account.png';
import MetamaskPendingRequests from '../images/metamask-pending-requests.png';
import MetamaskSignatureRequest1 from '../images/metamask-signature-request-1.png';
import ThreeBoxBeginnerProfile from '../images/3box-beginner-profile.png';
import ThreeBoxEditProfile from '../images/3box-edit-profile.png';
import ThreeBoxGithub1 from '../images/3box-github-1.png';
import ThreeBoxGithub2 from '../images/3box-github-2.png';
import ThreeBoxGithub3 from '../images/3box-github-3.png';
import ThreeBoxGithub4 from '../images/3box-github-4.png';
import ThreeBoxGithub5 from '../images/3box-github-5.png';
import ThreeBoxGithub6 from '../images/3box-github-6.png';
import ThreeBoxCompleteProfile from '../images/3box-complete-profile.png';
import ThreeBoxUpdatedProfile from '../images/3box-updated-profile.png';
import MetamaskConnectionRequest from '../images/metamask-connection-request.png';

const GettingStarted = () => (
    <section>
        <div className="container">
            <div className="box">
                <h1 className="subtitle has-text-centered">Getting Started</h1>

                <hr/>

                <div className="content">
                    <h5>Requirements</h5>
                    <ul>
                        <li>A Web3 Provider (the <a href="https://metamask.io/" target="_blank">Metamask</a> browser extension is recommended)</li>
                        <li>An Ethereum Account where you have access to the private key for signing (you will need to sign some data in order to create an Ethereum Profile)</li>
                        <li>A wanting to be apart of the decentralized web</li>
                    </ul>
                </div>
            </div>

            <div className="box has-text-centered">
                <p>In order to use IPLS, you must first create an Ethereum Profile using <a href="https://3box.io/create" target="_blank">3Box</a>.</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={ThreeBoxCreateAccountPage} />
                </figure>
            </div>

            <div className="box has-text-centered">
                <p>After clicking the <strong>Create Profile</strong> button you should see something similar to:</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={ThreeBoxSharingAccountRequest} />
                </figure>

                <br/>

                <div className="columns is-vcentered">
                    <div className="column is-four-fifths">
                        <p>You'll also notice that if you look at your Metamask browser extension, there should be a <strong>1</strong> present like so:</p>
                    </div>

                    <div className="column">
                        <figure className="image is-96x96">
                            <img src={PendingMetaMaskShareRequest} />
                        </figure>
                    </div>
                </div>
            </div>

            <div className="box has-text-centered">
                <p>Click the Metamask icon to reveal a <strong>Signature Request</strong> from 3Box to prove you own the Ethereum Account in Metamask</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={MetamaskSignatureRequest} />
                </figure>
            </div>

            <div className="box has-text-centered">
                <p>After clicking the <strong>Sign</strong> button, you should eventually see something similar to:</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={Blank3BoxAccount} />
                </figure>
            </div>

            <div className="box has-text-centered">
                <p>Congrats 🎉 You just created your very own Ethereum Profile!</p>
            </div>

            <div className="box has-text-centered">
                <div className="columns is-vcentered">
                    <div className="column is-four-fifths">
                        <p>Now you may notice that you have a <strong>2</strong> present by Metamask browser extension:</p>
                    </div>

                    <div className="column">
                        <figure className="image is-96x96">
                            <img src={MetamaskPendingRequests} />
                        </figure>
                    </div>
                </div>

                <p>Go ahead and click Metamask and click <strong>Sign</strong> for the two requests you have from 3Box (you may have to keep clicking <strong>Sign</strong> until the dialog box goes away):</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={MetamaskSignatureRequest1} />
                </figure>
            </div>

            <div className="box has-text-centered">
                <p>Now, after signing for your 3Box DID (Decentralized Identifier), which you just did in the previous step, you should now see some activity listed for your account:</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={ThreeBoxBeginnerProfile} />
                </figure>

                <br/>

                <p>If you don't see any activity listed for your account, try refreshing the page.</p>
            </div>

            <div className="box has-text-centered">
                <p>Now comes the fun part! It's time to spice up your Ethereum Profile! 🔥</p>

                <br/>

                <p>Go ahead and click where it says <strong>Add name</strong>. After doing so, you should see something similar to:</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={ThreeBoxEditProfile} />
                </figure>
            </div>

            <div className="box has-text-centered">
                <p>Feel free to add as much or as little information that you'd like.</p>

                <br/>

                <p>If you scroll down a bit, you'll see a <strong>Verified Accounts</strong> section.</p>

                <br/>

                <p>To verify your Github, go ahead and type your Github username like so:</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={ThreeBoxGithub1} />
                </figure>
            </div>

            <div className="box has-text-centered">
                <p>Then click the blue <strong>Verify</strong> text, and you should see something similar to:</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={ThreeBoxGithub2} />
                </figure>

                <br/>

                <p>Copy your 3Box DID like so:</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={ThreeBoxGithub3} />
                </figure>

                <br/>

                <p>Then click the <strong>Open a gist file</strong> button, and you should be taken to Github where you can create a gist for the account you'd like to verify.</p>

                <br/>

                <p>Go ahead and paste the 3Box DID you copied, and given the gist a recognizable name like <em>3box-verification.txt</em>:</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={ThreeBoxGithub4} />
                </figure>

                <br/>

                <p>After that, just click the <strong>Create public gist</strong> button, and head on back to your 3Box profile page.</p>

                <br/>

                <p>Next, click the blue <strong>Verify</strong> button, and if all is well you should see that your account was verified!</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={ThreeBoxGithub5} />
                </figure>

                <br/>

                <p>After clicking <strong>Done</strong> your 3Box profile should look similar to:</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={ThreeBoxGithub6} />
                </figure>
            </div>

            <div className="box has-text-centered">
                <p>Again, feel free to enter as much or a little information you'd like, but the more you fill out, the more you make it <em>your</em> Ethereum Profile!</p>

                <br/>

                <figure className="image is-16by9">
                    <img src={ThreeBoxCompleteProfile} />
                </figure>

                <br/>

                <p>When you're finished buidling out your profile, go ahead and scroll all the way done and click the <strong>Save</strong> button.</p>

                <br/>

                <p>You should now see <em>your</em> profile with the updated fields, and even an updated activity log.</p>

                <br/>

                <p>Great job at becoming part for the decentralization revolution!</p>

                <figure className="image is-16by9">
                    <img src={ThreeBoxUpdatedProfile} />
                </figure>
            </div>

            <div className="box has-text-centered">
                <p>When you're finished admiring your beautiful Ethereum Profile, go ahead and continue on to <a href="/registering-with-ipls">Registering with IPLS</a></p>
            </div>
        </div>
    </section>
);

export default GettingStarted;