import React, {useEffect, useState} from 'react';
import axios from "axios";

const CardSearch = () => {
    const [cardList, setCardList] = useState();
    const URI = 'https://api.magicthegathering.io/v1/cards?&contains=imageUrl'

    useEffect(() => {
        const controllerInitial = new AbortController();
        async function getCardList() {
            try {
                const result = await axios.get(URI, {
                    signal: controllerInitial.signal,
                });
                console.log(result)
                setCardList(result.data.cards)
            } catch (e) {
                console.error(e);
            }
        }
        getCardList();

        return function cleanup() {
            controllerInitial.abort();
        }
    }, []);
    return (
        <div>
            {cardList &&
                <>
                    {cardList.map((card) => {
                        return (
                            <img src={card.imageUrl} key={card.id}/>
                        );
                    })}
                </>
            }
        </div>
    );
};

export default CardSearch;