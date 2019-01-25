import React from 'react';
import { withRouter, Link } from 'react-router-dom'

// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faIgloo } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-regular-svg-icons';

const Header = (props) => (
    <section className="hero is-small">
        <div className="hero-head topHeader">
            <div className="container">
                <div className="is-pulled-right">
                    <span>
                      <a href="https://github.com/spacesailor24/ipls" target="_blank" className="button is-inverted">
                        <span className="icon">
                          <FontAwesomeIcon icon={faGithub}/>
                        </span>
                        <span>View on Github</span>
                      </a>
                    </span>
                </div>
            </div>
        </div>

        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title">
                    IPLS
                </h1>
                <h2 className="subtitle">
                    The Interplanetary Look-up Service
                </h2>
            </div>
        </div>

        <div className="hero-foot">
            <nav className="tabs">
                <div className="container">
                    <ul>
                        <li className={`${props.location.pathname === '/' ? 'is-active' : ''}`}>
                            <Link to="/">How it Works</Link>
                        </li>
                        <li className={`${props.location.pathname === '/getting-started' ? 'is-active' : ''}`}>
                            <Link to="/getting-started">Getting Started</Link>
                        </li>
                        <li className={`${props.location.pathname === '/registering-with-ipls' ? 'is-active' : ''}`}>
                            <Link to="/registering-with-ipls">Registering with IPLS</Link>
                        </li>
                        <li className={`${props.location.pathname === '/your-profile' ? 'is-active' : ''}`}>
                            <Link to="/your-profile">Your Profile</Link>
                        </li>
                        <li className={`${props.location.pathname === '/your-contacts-list' ? 'is-active' : ''}`}>
                            <Link to="/your-contacts-list">Your Contacts List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
);

export default withRouter(Header);