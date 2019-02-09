import React from 'react';
import SideMenu from "./YourProfile/SideMenu";
import ProfileDetails from "./YourProfile/ProfileDetails";

const YourProfile = ({ match }) => (
    <section>
        <div className="container">
            <div className="columns">
                <div className="column is-2">
                    <SideMenu username={match.params.username}/>
                </div>

                <div className="column is-10">
                    <ProfileDetails username={match.params.username}/>
                </div>
            </div>
        </div>
    </section>
);

export default YourProfile;
