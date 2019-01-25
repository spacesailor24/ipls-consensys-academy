import React from 'react';

import Header from './layout/Header';
import Content from './layout/Content';
import Router from "./layout/Router";

const Layout = () => (
    <div>
        <Header/>
        <Content>
            <Router/>
        </Content>
    </div>
);

export default Layout;