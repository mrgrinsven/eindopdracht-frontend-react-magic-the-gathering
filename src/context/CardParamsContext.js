import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';

import {AuthContext} from "./AuthContext";

export const CardParamsContext = createContext(null);

const CardParamsContextProvider = ({children}) => {
    const URI = 'https://api.magicthegathering.io/v1/cards';

    const {isAuth} = useContext(AuthContext);

    const [colorFilter, setColorFilter] = useState({
        white: false,
        blue: false,
        black: false,
        red: false,
        green: false,
    });

    const [typeFilter, setTypeFilter] = useState({
        creature: false,
        artifact: false,
        instant: false,
        sorcery: false,
        land: false,
        enchantment: false,
        planeswalker: false,
    });

    const [manaFilter, setManaFilter] = useState({
        cost0: false,
        cost1: false,
        cost2: false,
        cost3: false,
        cost4: false,
        cost5: false,
        cost6: false,
        cost7: false,
        cost8: false,
        cost9: false,
        cost10: false,
        costx: false,
        previous: '',
    });

    const [rarityFilter, setRarityFilter] = useState({
        common: false,
        uncommon: false,
        rare: false,
        mythic: false,
    });

    const [cardList, setCardList] = useState();

    const [searchParams, setSearchParams] = useState({
        contains: 'imageUrl',
        page: 1,
        pageSize: 70,
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
        page: 1,
        pageSize: 70,
    });

    const [nameParams, setNameParams] = useState({
        name: '',
        contains: 'imageUrl',
    });

    const [activateSearch, toggleActivateSearch] = useState(false);
    const [paramError, toggleParamError] = useState(false);
    const [paramErrorMessage, setParamErrorMessage] = useState('');
    const [paramLoading, toggleParamLoading] = useState(false);

    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        const cardController = new AbortController();

        async function getCardList() {
            toggleParamError(false);
            toggleParamLoading(true);

            try {
                const result = await axios.get(URI, {
                    params: searchParams,
                    signal: cardController.signal,
                });
                setPageCount(Math.floor(result.headers['total-count'] /70))
                setCardList(result.data.cards)
            } catch (e) {
                console.log(e)
                if (e.code === 'ERR_CANCELED') {
                    console.log('controller successfully aborted')
                } else if (e.code === 'ERR_NETWORK') {
                    setParamErrorMessage('Service unavailable 503 error')
                } else {
                    console.error(e);
                    setParamErrorMessage('Something went wrong please try again')
                }
                toggleParamError(true);
            }

            toggleParamLoading(false);
        }

        if (isAuth && activateSearch) {
            getCardList();
        }

        return function cleanup() {
            cardController.abort();
        }
    }, [activateSearch, isAuth, searchParams]);

    return (
        <CardParamsContext.Provider
            value={{
                filterParams, setFilterParams,
                nameParams, setNameParams,
                colorFilter, setColorFilter,
                typeFilter, setTypeFilter,
                manaFilter, setManaFilter,
                rarityFilter, setRarityFilter,
                activateSearch, toggleActivateSearch,
                paramError, toggleParamError,
                paramErrorMessage, setParamErrorMessage,
                paramLoading, toggleParamLoading,
                pageCount, setPageCount,
                searchParams, setSearchParams,
                cardList,
            }}
        >
            {children}
        </CardParamsContext.Provider>
    );
};

export default CardParamsContextProvider;