import React from 'react';

import Header from './Header';
import Content from './Content';
import Router from "./Router";

const Layout = () => (
    <div>
        <Header/>
        <Content>
            <Router/>
        </Content>
    </div>
);

export default Layout;