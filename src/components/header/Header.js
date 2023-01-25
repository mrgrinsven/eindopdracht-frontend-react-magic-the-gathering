import React from 'react';

import './Header.css';

import MtgLogo from '../../assets/magic-logo.png'
import Navigation from "../navigation/Navigation";


const Header = () => {
    return (
        <div className="inner-container">
            <Navigation>
                <div className="header-container">
                    <div className="image-container">
                        <img className="mtg-logo" src={MtgLogo} alt="Magic the Gathering logo"/>
                    </div>
                    <h2>Card Database</h2>
                </div>
            </Navigation>
        </div>
    );
};

export default Header;