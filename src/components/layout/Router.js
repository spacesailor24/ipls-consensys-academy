import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HowItWorks from '../HowItWorks';
import GettingStarted from '../GettingStarted';
import RegisteringWithIPLS from '../RegisteringWithIPLS/RegisteringWithIPLS';
import YourProfile from "../YourProfile";

const Router = () => (
    <Switch>
        <Route exact path='/' component={HowItWorks}/>
        <Route exact path='/getting-started' component={GettingStarted}/>
        <Route exact path='/registering-with-ipls' component={RegisteringWithIPLS}/>
        <Route path='/:username' component={YourProfile}/>
    </Switch>
);

export default Router