import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

import './CardSearch.css';

import Card from '../../components/card/Card'
import CardFilters from '../../components/card-filters/CardFilters'
import {CardParamsContext} from '../../context/CardParamsContext';
import {AuthContext} from '../../context/AuthContext';

const CardSearch = () => {
    //context for card search results and functionality
    const {cardList, paramError, paramErrorMessage, paramLoading} = useContext(CardParamsContext);
    //context for authentication check
    const {isAuth} = useContext(AuthContext);

    return (
        <div className="inner-container">
            {!isAuth &&
                <>
                    <h1 className="login-message">Please log in to use this feature</h1>
                    <p><NavLink
                        className="redirect-link page-link"
                        to="/login"
                    >log in here.</NavLink> No account?<NavLink
                        className="redirect-link page-link"
                        to="/register"
                    >register here</NavLink>
                    </p>

                </>

            }
            {isAuth &&
                <div className="card-and-filter-container">
                    <CardFilters/>
                    <div className="cards-container">
                        {cardList && !paramLoading && !paramError &&
                            <>
                                {cardList.length === 0 ?
                                    <h3 className="search-result-message">No results found</h3>
                                    :
                                    cardList.map((card) => {
                                        return (
                                            <Card
                                                cardImage={card.imageUrl}
                                                key={card.id}
                                                cardId={card.id}
                                                cardInfo={card}
                                                cardName={card.name}
                                                supertypes={card.supertypes}
                                            />
                                        );
                                    })
                                }
                            </>
                        }

                        {paramLoading &&
                            <h3 className="search-result-message">LOADING...</h3>
                        }

                        {paramError &&
                            <h3 className="search-result-message search-result-error">{paramErrorMessage}</h3>
                        }
                    </div>
                </div>
            }

        </div>
    );
};

export default CardSearch;