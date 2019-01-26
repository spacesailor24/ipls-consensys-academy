import React from 'react';

const UserHasBeenRegistered = (props) => (
    <div className="box has-text-centered">
        <p>Congratulations 🎈</p>

        <br/>

        <p>You've successfully registered the username:</p>

        <br/>

        <p>{props.registeredUser.username}</p>

        <br/>

        <p>with the 3Box DID:</p>

        <br/>

        <p>{props.registeredUser.threeBoxDID}</p>

        <br/>

        <p>How do you feel?</p>
    </div>
);

export default UserHasBeenRegistered;