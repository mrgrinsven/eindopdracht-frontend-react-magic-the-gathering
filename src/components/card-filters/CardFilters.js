import React, {useState} from 'react';

import './CardFilters.css';

import ColorFilter from '../color-filter/ColorFilter';
import ManaCostFilter from '../mana-cost-filter/ManaCostFilter';
import RarityFilter from '../rarity-filter/RarityFilter';
import TypeFilter from '../type-filter/TypeFilter';

import SearchIcon from '../../assets/search_icon.png';


const CardFilters = () => {
    return (
        <div className="filter-container">
            <div className="name-search-container">
                <div className="input-container">
                    <label htmlFor="card-name-search"></label>
                    <input
                        className="name-search"
                        type="search"
                        id="card-name-search"
                        name="card-name-search"
                        placeholder="Search by Card Name"/>
                    <button
                        className="name-search-button"
                        id="card-name-search-button"
                        type="button"
                    >
                        <img
                            src={SearchIcon}
                            alt="Search icon"
                        />
                    </button>
                </div>
                <div className="input-container">
                    <label htmlFor="artist-name-search"></label>
                    <input
                        className="name-search"
                        type="search"
                        id="artist-name-search"
                        name="artist-name-search"
                        placeholder="Search by Artist Name"/>
                    <button
                        className="name-search-button"
                        id="artist-name-search-button"
                        type="button"
                    >
                        <img
                            src={SearchIcon}
                            alt="Search icon"
                        />
                    </button>
                </div>
            </div>
            <div className="button-filter-container">
                <ColorFilter/>
                <TypeFilter/>
                <ManaCostFilter/>
                <RarityFilter/>
            </div>
            <button
                id="filter-search-button"
                type="button"
            >
                filter search
            </button>
        </div>
    );
};

export default CardFilters;