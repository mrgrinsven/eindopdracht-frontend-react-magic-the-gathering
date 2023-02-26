import React, {useContext} from 'react';
import {DeckContext} from '../../context/DeckContext';

import './Deck.css'

import Card from '../../components/card/Card';
import DeckManagement from '../../components/deck-management/DeckManagement';

const Deck = () => {
    const {deckList} = useContext(DeckContext)

    return (
        <div className="inner-container">
            <DeckManagement/>
            <div className="deck-cards-container">

                {Object.keys(deckList).length > 0 &&
                    <>
                        {Object.keys(deckList).map((cardNames) => {
                            const cardKeys = deckList[cardNames].cardIds
                            return (
                                Object.keys(deckList[cardNames].cardIds).map((card) => {
                                    return (
                                        <Card
                                            className={cardKeys[card].cardData.supertypes ? (cardKeys[card].cardData.supertypes.includes('Basic') ? 'basic-land' : null) : null}
                                            cardImage={cardKeys[card].cardData.imageUrl}
                                            key={cardKeys[card].cardData.id}
                                            cardId={cardKeys[card].cardData.id}
                                            cardInfo={cardKeys[card].cardData}
                                            cardName={cardKeys[card].cardData.name}
                                            supertypes={cardKeys[card].cardData.supertypes}
                                        />
                                    );
                                })
                            );
                        })}
                    </>
                }
            </div>
        </div>
    );
};

export default Deck;