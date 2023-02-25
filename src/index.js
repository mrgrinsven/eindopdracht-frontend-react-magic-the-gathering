import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import CardParamsContextProvider from './context/CardParamsContext';
import DeckContextProvider from './context/DeckContext';
import AuthContextProvider from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <CardParamsContextProvider>
                    <DeckContextProvider>
                        <App/>
                    </DeckContextProvider>
                </CardParamsContextProvider>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
