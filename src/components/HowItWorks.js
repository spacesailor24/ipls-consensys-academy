import React from 'react';

const HowItWorks = () => (
    <section>
        <div className="container">
            <div className="box">
                <h1 className="subtitle has-text-centered">How it Works</h1>

                <p>
                    Built ontop of <a href="https://3box.io/" target="_blank">3Box</a>, IPLS is a service that allows users to register a username with a 3Box Ethereum profile.
                    A 3Box Ethereum Profile allows you to register public information about yourself and correlate it with a <a href="https://w3c-ccg.github.io/did-spec/" target="_blank">DID (Decentralized Identifier)</a>.
                    Using IPLS, and the UsernameToken smart contract, you can then register your 3Box DID with a unique username that can be used to easily pull up your 3Box Ethereum Profile, or any other information you'd like to be publically available such as your public Ethereum address.
                </p>
            </div>
        </div>
    </section>
);

export default HowItWorks;