import React, {createContext, useEffect, useState} from 'react';

export const DeckContext = createContext(null);
const DeckContextProvider = ({children}) => {
    const [deckList, setDeckList] = useState({});

    useEffect(() => console.log(deckList, Object.keys(deckList)), [deckList]);

    return (
        <DeckContext.Provider
            value={{
                deckList, setDeckList,
            }}
        >
            {children}
        </DeckContext.Provider>
    );
};

export default DeckContextProvider;
