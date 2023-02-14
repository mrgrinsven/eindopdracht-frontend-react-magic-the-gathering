import React, {useContext} from 'react';
import {CardParamsContext} from '../../context/CardParamsContext';

import './CardNameSearch.css'

import SearchIcon from '../../assets/search_icon.png';


const CardNameSearch = () => {
    const {setSearchParams, nameParams, setNameParams} = useContext(CardParamsContext);
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
                    onKeyUp={event => event.key === 'Enter' && paramsNameSearch() & event.target.blur()}
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
        </div>
    );
};

export default CardNameSearch;