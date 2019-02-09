import React from 'react';
import { withRouter, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
                    </ul>
                </div>
            </nav>
        </div>
    </section>
);

export default withRouter(Header);