import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const CardParamsContext = createContext(null);

const CardParamsContextProvider = ({children}) => {
    const URI = 'https://api.magicthegathering.io/v1/cards';

    const [cardList, setCardList] = useState();
    const [searchParams, setSearchParams] = useState({
        contains: 'imageUrl',
    });
    const [filterParams, setFilterParams] = useState({
        artist: '',
        setName: '',
        colorIdentity: '',
        types: '',
        cmc: '',
        power: '',
        toughness: '',
        rarity: '',
        text: '',
        contains: 'imageUrl',
    });
    const [nameParams, setNameParams] = useState({
        name: '',
        contains: 'imageUrl',
    });

    useEffect(() => {
        const controller = new AbortController();

        async function getCardList() {
            try {
                const result = await axios.get(URI, {
                    params: searchParams,
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
    }, [searchParams]);

    return (
        <CardParamsContext.Provider
            value={{
                filterParams, setFilterParams,
                nameParams, setNameParams,
                cardList, setSearchParams
            }}
        >
            {children}
        </CardParamsContext.Provider>
    );
};

export default CardParamsContextProvider;