import React from 'react'

const RegistrationRequirements = () => (
    <div className="box">
        <h1 className="subtitle has-text-centered">Registering with IPLS</h1>

        <hr/>

        <div className="content">
            <h5>Requirements</h5>
            <ul>
                <li>A Web3 Provider (the <a href="https://metamask.io/" target="_blank">Metamask</a> browser extension is recommended)</li>
                <li>A 3Box Ethereum Profile with an associated DID (if you don't have these, please refer to the <a href="/getting-started">Getting Started</a> page)</li>
                <li>An Ethereum Account where you have access to the private key for signing (you will need to sign a transaction to register a username)</li>
                <li>Some Ether in your Ethereum Account</li>
                <li>A wanting to make it easier for those to discover your Public Ethereum Profile</li>
            </ul>
        </div>
    </div>
);

export default RegistrationRequirements;