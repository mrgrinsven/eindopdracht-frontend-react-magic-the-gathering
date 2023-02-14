import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';

import './CardSearch.css';

import Card from '../../components/card/Card'
import CardFilters from '../../components/card-filters/CardFilters'
import {CardParamsContext} from '../../context/CardParamsContext';

const CardSearch = () => {
    const {cardList} = useContext(CardParamsContext);

    return (
        <div className="inner-container">
            <div className="card-and-filter-container">
                <CardFilters/>
                <div className="cards-container">
                    {cardList &&
                        <>
                            {cardList.map((card) => {
                                return (
                                    <Card
                                        cardImage={card.imageUrl}
                                        key={card.id}
                                    />
                                );
                            })}
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default CardSearch;