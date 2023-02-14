import React, {useContext} from 'react';
import {CardParamsContext} from '../../context/CardParamsContext';

import './CardFilters.css';

import ColorFilter from '../color-filter/ColorFilter';
import ManaCostFilter from '../mana-cost-filter/ManaCostFilter';
import RarityFilter from '../rarity-filter/RarityFilter';
import TypeFilter from '../type-filter/TypeFilter';

import SearchIcon from '../../assets/search_icon.png';



const CardFilters = () => {
    const {setSearchParams, filterParams, nameParams, setNameParams} = useContext(CardParamsContext);

    function paramsFilterSearch() {
        setSearchParams(filterParams)
    }

    function paramsNameSearch() {
        setSearchParams(nameParams)
    }
    function handleChange(event) {
        setNameParams({
            ...nameParams,
            name: event.target.value,
        });
    }

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
                        placeholder="Search by Card Name"
                        onChange={handleChange}
                        value={nameParams.name}
                    />
                    <button
                        className="name-search-button"
                        id="card-name-search-button"
                        type="button"
                        onClick={paramsNameSearch}
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
                onClick={paramsFilterSearch}
            >
                filter search
            </button>
        </div>
    );
};

export default CardFilters;