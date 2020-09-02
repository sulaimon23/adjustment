import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => (
    <header id="home">
        <nav className="navbar blog_nav">
                <div className="navbar-header">
                        <img src="assets/img/logo.png"  alt="Logo" />
                </div>
                <div >
                    <ul >
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#about">About</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#services">Services</a>
                        </li>
                        <li>
                            <a className="smooth-menu" href="#team">Team</a>
                        </li>
                    </ul>
                </div>
        </nav>
    </header>
);

export default navbar;