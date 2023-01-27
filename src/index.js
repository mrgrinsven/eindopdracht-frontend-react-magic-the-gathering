import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import CardDataContextProvider from './context/CardDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <CardDataContextProvider>
                <App/>
            </CardDataContextProvider>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
