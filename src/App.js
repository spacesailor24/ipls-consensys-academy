import "@babel/polyfill";
import React, { Component} from "react";
import {hot} from "react-hot-loader";

import './styles/appStyles.scss';
import Layout from "./components/layout/Layout";

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {};
    }

    async componentWillMount() {};

    render(){
        return(
            <Layout/>
        );
    }
}

export default hot(module)(App);
