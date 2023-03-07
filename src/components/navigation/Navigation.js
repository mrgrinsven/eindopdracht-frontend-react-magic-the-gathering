import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

import './Navigation.css'

import {AuthContext} from '../../context/AuthContext';

const Navigation = ({children}) => {
    const {logout, isAuth, user} = useContext(AuthContext);
    return (
        <nav id="nav">
            <ul className="nav-list">
                <li>
                    <NavLink className="nav-link" to="/">home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/card-search">card search</NavLink>
                </li>
                <li>
                    {children}
                </li>
                <li>
                    {!isAuth &&
                        <NavLink className="nav-link" to="/register">register</NavLink>
                    }
                    {isAuth &&
                        <NavLink className="nav-link" to="/deck">deck</NavLink>
                    }
                </li>
                <li>
                    {!isAuth &&
                        <NavLink className="nav-link" to="/login">login</NavLink>
                    }
                    {isAuth &&
                        <p
                            className="nav-username"
                        >
                            USER: {user.username}
                            <span
                                className="logout-link"
                                onClick={logout}
                            >
                                (logout)
                            </span>
                        </p>
                    }

                </li>
            </ul>
        </nav>
    );
};

export default Navigation;