import React, {createContext, useEffect, useState} from 'react';

export const DeckContext = createContext(null);
const DeckContextProvider = ({children}) => {
    const [deckList, setDeckList] = useState({});
    const [savedDeckList , setSavedDeckList] = useState(localStorage.getItem('savedDecks') ? JSON.parse(localStorage.getItem('savedDecks')): []);
    const [selectedDeck, setSelectedDeck] = useState('none');

    useEffect(() => {
        localStorage.setItem('savedDecks', JSON.stringify(savedDeckList));
        if (selectedDeck !== 'none') {
            localStorage.setItem(selectedDeck, JSON.stringify(deckList));
        }
        console.log(deckList, Object.keys(deckList), selectedDeck, savedDeckList)
        }, [savedDeckList, selectedDeck, deckList]);

    return (
        <DeckContext.Provider
            value={{
                deckList, setDeckList,
                savedDeckList, setSavedDeckList,
                selectedDeck, setSelectedDeck,
            }}
        >
            {children}
        </DeckContext.Provider>
    );
};

export default DeckContextProvider;
