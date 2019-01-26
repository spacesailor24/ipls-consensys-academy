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
                      <a href="https://github.com/spacesailor24/ipls" target="_blank" className="button">
                        <span className="icon">
                          <FontAwesomeIcon icon={faGithub}/>
                        </span>
                        <span>View on Github</span>
                      </a>
                    </span>
                </div>
            </div>
        </div>

        <div className="hero-body ">
            <div className="container has-text-centered">
                <h1 className="title text-color-off-white">
                    IPLS
                </h1>
                <h2 className="subtitle text-color-off-white">
                    The Interplanetary Look-up Service
                </h2>
            </div>
        </div>

        <div className="hero-foot">
            <nav className="tabs">
                <div className="container">
                    <ul>
                        <li className={`${props.location.pathname === '/' ? 'is-active' : ''}`}>
                            <Link to="/">
                                <span className={`${props.location.pathname === '/' ? '' : 'text-color-off-white'}`}>
                                    How it Works
                                </span>
                            </Link>
                        </li>
                        <li className={`${props.location.pathname === '/getting-started' ? 'is-active' : ''}`}>
                            <Link to="/getting-started">
                                <span className={`${props.location.pathname === '/getting-started' ? '' : 'text-color-off-white'}`}>
                                    Getting Started
                                </span>
                            </Link>
                        </li>
                        <li className={`${props.location.pathname === '/registering-with-ipls' ? 'is-active' : ''}`}>
                            <Link to="/registering-with-ipls">
                                <span className={`${props.location.pathname === '/registering-with-ipls' ? '' : 'text-color-off-white'}`}>
                                    Registering with IPLS
                                </span>
                            </Link>
                        </li>
                        <li className={`${props.location.pathname === '/your-profile' ? 'is-active' : ''}`}>
                            <Link to="/your-profile">
                                <span className={`${props.location.pathname === '/your-profile' ? '' : 'text-color-off-white'}`}>
                                    Your Profile
                                </span>
                            </Link>
                        </li>
                        <li className={`${props.location.pathname === '/your-contacts-list' ? 'is-active' : ''}`}>
                            <Link to="/your-contacts-list">
                                <span className={`${props.location.pathname === '/your-contacts-list' ? '' : 'text-color-off-white'}`}>
                                    Your Contacts List
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
);

export default withRouter(Header);