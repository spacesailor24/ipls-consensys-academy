import React, { Component } from 'react';

class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="menu">
                <p className="menu-label">
                    {this.props.username}
                </p>
                <ul className="menu-list">
                    <li><a className="is-active">Profile</a></li>
                </ul>
                <p className="menu-label">
                    Contacts
                </p>
                <ul className="menu-list">
                    <li><a>Payments</a></li>
                    <li><a>Transfers</a></li>
                    <li><a>Balance</a></li>
                </ul>
            </aside>
        )
    }
}

export default SideMenu;