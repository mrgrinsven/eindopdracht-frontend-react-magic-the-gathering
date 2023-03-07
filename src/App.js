import {Routes, Route} from 'react-router-dom';

import './App.css';


import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import CardSearch from './pages/card-search/CardSearch'
import Deck from './pages/deck/Deck'
import PageNotFound from './pages/page-not-found/PageNotFound';

function App() {
    document.title = 'MTG Card Database'
    return (
        <>
            <header className="outer-container">
                <Header/>
            </header>
            <main className="outer-container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/card-search" element={<CardSearch/>}/>
                    <Route path="/deck" element={<Deck/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </main>
            <footer className="outer-container">
                <Footer/>
            </footer>

        </>
    );
}

export default App;
