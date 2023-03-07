import React, {useContext} from 'react';
import {DeckContext} from '../../context/DeckContext';

import './Card.css'

const Card = ({cardImage, cardId, cardName, cardInfo, supertypes}) => {
    const {deckList, setDeckList, selectedDeck} = useContext(DeckContext)

    function addOne() {
        if (cardName in deckList) {
            if (cardId in deckList[cardName].cardIds) {
                setDeckList({
                    ...deckList,
                    [cardName]:{
                        ...deckList[cardName],
                        cardIds: {
                            ...deckList[cardName].cardIds,
                            [cardId]: {
                                ...deckList[cardName].cardIds[cardId],
                                cardCount: deckList[cardName].cardIds[cardId].cardCount + 1,
                            }
                        },
                        totalCardCount: deckList[cardName].totalCardCount + 1,
                    }
                });
            } else {
                setDeckList({
                    ...deckList,
                    [cardName]:{
                        ...deckList[cardName],
                        cardIds: {
                            ...deckList[cardName].cardIds,
                            [cardId]: {
                                cardData: cardInfo,
                                cardCount: 1,
                            }
                        },
                        totalCardCount: deckList[cardName].totalCardCount + 1,
                    }
                });
            }
        } else {
            setDeckList({
                ...deckList,
                [cardName]:{
                    cardIds: {
                        [cardId]: {
                            cardData: cardInfo,
                            cardCount: 1,
                        }
                    },
                    totalCardCount: 1,
                }
            });
        }
    }

    function subtractOne() {
        if (cardName in deckList && deckList[cardName].totalCardCount - 1 > 0) {
            if (cardId in deckList[cardName].cardIds && deckList[cardName].cardIds[cardId].cardCount - 1 > 0) {
                setDeckList({
                    ...deckList,
                    [cardName]:{
                        ...deckList[cardName],
                        cardIds: {
                            ...deckList[cardName].cardIds,
                            [cardId]: {
                                ...deckList[cardName].cardIds[cardId],
                                cardCount: deckList[cardName].cardIds[cardId].cardCount - 1,
                            }
                        },
                        totalCardCount: deckList[cardName].totalCardCount - 1,
                    }
                });
            } else {
                const deckListCopy = {...deckList};
                delete deckListCopy[cardName].cardIds[cardId];
                setDeckList({
                    ...deckListCopy,
                    [cardName]:{
                        ...deckListCopy[cardName],
                        totalCardCount: deckListCopy[cardName].totalCardCount - 1,
                    }
                });
            }
        } else {
            const deckListCopy = {...deckList};
            delete deckListCopy[cardName];
            setDeckList(deckListCopy);
        }
    }

    return (
        <div className={`card-container ${window.location.pathname === '/deck' ? (supertypes ? (supertypes.includes('Basic')? 'basic-land' : null) : null ) : null }`}>
            <img
                className="card-image"
                src={cardImage}
            />
            <div className="button-container">
                <button
                    className="subtract-deck-button deck-button"
                    type="button"
                    disabled={!(cardName in deckList)}
                    onClick={subtractOne}
                >
                    -
                </button>
                <div className="counter-container">
                    <p>{cardName in deckList && cardId in deckList[cardName].cardIds ? deckList[cardName].cardIds[cardId].cardCount : 0 }</p>
                </div>
                <button
                    className="add-deck-button deck-button"
                    type="button"
                    disabled={selectedDeck === 'none' ? true : supertypes ? (cardName in deckList && supertypes.includes('Basic') ? deckList[cardName].totalCardCount >= 99 : false) : (cardName in deckList? deckList[cardName].totalCardCount >= 4 : false)}
                    onClick={addOne}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Card;