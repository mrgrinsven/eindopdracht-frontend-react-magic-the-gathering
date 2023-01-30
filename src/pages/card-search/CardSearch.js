import React, {useEffect, useState} from 'react';
import axios from "axios";

import './CardSearch.css';

import Card from '../../components/card/Card'
import CardFilters from '../../components/card-filters/CardFilters'

const CardSearch = () => {
    const URI = 'https://api.magicthegathering.io/v1/cards';

    const [cardList, setCardList] = useState();


    useEffect(() => {
        const controller = new AbortController();

        async function getCardList() {
            try {
                const result = await axios.get(URI, {
                    params: {
                        name: '',
                        colorIdentity: 'r',
                        types: 'land',
                        cmc: '',
                        power: '',
                        toughness: '',
                        contains: 'imageUrl',
                    },
                    signal: controller.signal,
                });
                console.log(result)
                setCardList(result.data.cards)
            } catch (e) {
                console.error(e);
            }
        }

        getCardList();

        return function cleanup() {
            controller.abort();
        }
    }, []);
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