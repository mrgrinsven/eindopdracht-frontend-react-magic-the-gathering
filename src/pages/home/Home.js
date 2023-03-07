import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

import './Home.css'

import {AuthContext} from '../../context/AuthContext';

const Home = () => {
    const {isAuth, user} = useContext(AuthContext);
    return (
        <div className="inner-container">
            <div className="home-page-container">
                <section className="home-page-section home-page-title">
                    <h1>WELCOME TO THE MAGIC THE GATHERING CARD DATABASE</h1>
                    <h2>Search for any Magic card and create your own deck!</h2>
                </section>
                <section className="home-page-section">

                    <article className="home-page-article">
                        <h3>{isAuth && <span>Hello {user.username}!</span>} Let's get started!</h3>
                        {!isAuth &&
                            <>
                            <p>To make use of the card database and deck creation you need to have an account and log
                                in.</p>
                            <p>To start using the card database <NavLink
                            className="page-link"
                            to="/login"
                            >log in here</NavLink>.</p>
                            <p>If you do not have an account <NavLink
                            className="page-link"
                            to="/register"
                            >register here</NavLink> first.</p>
                            </>
                        }

                        {isAuth &&
                            <>
                                <p>If you want search for cards proceed to the <NavLink
                                    className="page-link"
                                    to="/card-search"
                                >card-search page.</NavLink></p>
                                <p>If you want to manage your deck proceed to the <NavLink
                                    className="page-link"
                                    to="/deck"
                                >deck-management page.</NavLink></p>
                            </>
                        }
                    </article>

                    <article className="home-page-article">
                        <h3>Additional information:</h3>
                        <p>
                            Visit this <a
                            className="page-link"
                            href="https://en.wikipedia.org/wiki/Magic:_The_Gathering_rules"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            link</a> to learn more about the Magic the Gathering rules!
                        </p>
                        <p>
                            Visit the <a
                            className="page-link"
                            href="https://magic.wizards.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Magic the Gathering official website</a> for additional information.
                        </p>
                        <p>
                            Visit the <a
                            className="page-link"
                            href="https://magic.wizards.com/en/mtgarena"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Magic Arena official website</a> if you want to try the card-game online for free!
                        </p>
                    </article>
                </section>
                <section className="home-page-section home-page-card-section">
                    <img
                        className="home-page-card"
                        src="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=382866&type=card"
                        alt="black lotus"/>
                    <img
                        className="home-page-card"
                        src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=442198&type=card"
                        alt="nicol bolas"/>
                    <img
                        className="home-page-card"
                        src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383147&type=card"
                        alt="volcanic island"/>
                    <img
                        className="home-page-card"
                        src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=365&type=card"
                        alt="lord of the pit"/>
                    <img
                        className="home-page-card"
                        src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129906&type=card"
                        alt="birds of paradise"/>
                    <img
                        className="home-page-card"
                        src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383204&type=card"
                        alt="chandra pyromaster"/>
                    <img
                        className="home-page-card"
                        src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=413585&type=card"
                        alt="counterspell"/>
                    <img
                        className="home-page-card"
                        src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129808&type=card"
                        alt="wrath of god"/>
                </section>
            </div>
        </div>
    );
};

export default Home;