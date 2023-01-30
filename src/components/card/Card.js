import React from 'react';

import './Card.css'

const Card = ({cardImage}) => {
    return (
        <div className="card-container">
            <img
                className="card-image"
                src={cardImage}
            />
            <div className="button-container">
                <button
                    className="subtract-deck-button deck-button"
                    /*value={}
                    disabled={}
                    onClick={}*/
                >
                    -
                </button>
                <div className="counter-container">
                    <p>0</p>
                </div>
                <button
                    className="add-deck-button deck-button"
                    /* value={}
                     disabled={}
                     onClick={}*/
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Card;