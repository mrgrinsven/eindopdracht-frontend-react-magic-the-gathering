import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import CardParamsContextProvider from './context/CardParamsContext';
import DeckContextProvider from './context/DeckContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <CardParamsContextProvider>
                <DeckContextProvider>
                    <App/>
                </DeckContextProvider>
            </CardParamsContextProvider>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
