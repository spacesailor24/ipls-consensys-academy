import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HowItWorks from '../HowItWorks';
import GettingStarted from '../GettingStarted';
import RegisteringWithIPLS from '../RegisteringWithIPLS/RegisteringWithIPLS';
import YourProfile from "../YourProfile";
import YourContactsList from "../YourContactsList";

const Router = () => (
    <Switch>
        <Route exact path='/' component={HowItWorks}/>
        <Route exact path='/getting-started' component={GettingStarted}/>
        <Route exact path='/registering-with-ipls' component={RegisteringWithIPLS}/>
        <Route path='/your-profile' component={YourProfile}/>
        <Route path='/your-contacts-list' component={YourContactsList}/>
    </Switch>
);

export default Router