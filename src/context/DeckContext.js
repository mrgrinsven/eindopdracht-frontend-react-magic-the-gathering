import React, {createContext, useEffect, useState} from 'react';

export const DeckContext = createContext(null);
const DeckContextProvider = ({children}) => {
    //useState for cards in deck
    const [deckList, setDeckList] = useState({});
    //useState for saved deck names
    const [savedDeckList, setSavedDeckList] = useState(localStorage.getItem('savedDecks') ? JSON.parse(localStorage.getItem('savedDecks')) : []);
    //useState for selected deck
    const [selectedDeck, setSelectedDeck] = useState('none');

    //useEffect for saving changes to selected deck
    useEffect(() => {
        localStorage.setItem('savedDecks', JSON.stringify(savedDeckList));
        if (selectedDeck !== 'none') {
            localStorage.setItem(selectedDeck, JSON.stringify(deckList));
        }
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
