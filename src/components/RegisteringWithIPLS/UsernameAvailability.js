import React from 'react';

const UsernameAvailability = (props) => (
    <div className="has-text-centered">
        {props.userNameIsTaken ? <p className='has-text-danger'>The username, {props.username}, has already been registered</p> : ''}

        {!props.userNameIsTaken ? <p className='has-text-success'>The username, {props.username}, is available</p> : ''}
    </div>
);

export default UsernameAvailability;