import React from 'react';

const AddingUsernameTo3BoxProfile = (props) => (
    props.addingUsernameTo3BoxProfile  && !props.usernameHasBeenAddedTo3BoxProfile ?
        <div className="box has-text-centered">
            <p>Now please hold on a second while your username is added to your 3Box Profile...</p>

            <br/>

            <div className="columns">
                <div className="column is-offset-5"></div>
                <div className="column">
                    <div className="spinner"></div>
                </div>
                <div className="column is-offset-5"></div>
            </div>
        </div> :
        <div className="box has-text-centered margin-bottom-md">
            <p>Your username has been successfully pinned to your 3Box public storage</p>
        </div>
);

export default AddingUsernameTo3BoxProfile
