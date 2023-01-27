import React, { useEffect, createContext } from 'react';
import axios from 'axios';
export const CardDataContext = createContext(null);


const CardDataContextProvider = ({children}) => {

    return (
        <CardDataContext.Provider>
            {children}
        </CardDataContext.Provider>
    );
};

export default CardDataContextProvider;