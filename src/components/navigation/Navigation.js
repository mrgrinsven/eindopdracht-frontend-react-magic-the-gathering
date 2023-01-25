import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navigation.css'

const Navigation = ({children}) => {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <NavLink className="nav-link" to="/">home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/card-search">card search</NavLink>
                </li>
                {children}
                <li>
                    <NavLink className="nav-link" to="/deck">deck</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/login">login</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;