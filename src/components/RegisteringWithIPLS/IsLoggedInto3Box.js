import React from 'react';

const IsLoggedInto3Box = (props) => (
    <div className="box has-text-centered">
        <p>
            {
                props.threeBoxProfile.name ?
                `Hello there, ${props.threeBoxProfile.name}, you are signed into 3Box` :
                `Hello there, you're signed into 3Box`
            }
        </p>
    </div>
);

export default IsLoggedInto3Box;