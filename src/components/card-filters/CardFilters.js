import React, {useContext} from 'react';
import {CardParamsContext} from '../../context/CardParamsContext';

import './CardFilters.css';

import ColorFilter from '../color-filter/ColorFilter';
import ManaCostFilter from '../mana-cost-filter/ManaCostFilter';
import RarityFilter from '../rarity-filter/RarityFilter';
import TypeFilter from '../type-filter/TypeFilter';
import CardNameSearch from '../card-name-search/CardNameSearch';
import ArtistFilter from '../artist-filter/ArtistFilter';
import SetFilter from '../set-filter/SetFilter';
import PowerToughnessFilter from '../power-toughness-filter/PowerToughnessFilter';
import DeckManagement from '../deck-management/DeckManagement';


const CardFilters = () => {
    //context for search parameters and search functionality
    const {setSearchParams, filterParams, toggleActivateSearch, paramLoading} = useContext(CardParamsContext);

    //function for setting searchParams with filterParams
    function paramsFilterSearch() {
        toggleActivateSearch(true);
        setSearchParams(filterParams);
    }

    return (
        <>
            <div className="filter-container">
                <CardNameSearch/>

                <div className="button-filter-container">
                    <div className="section-filter-container">
                        <ColorFilter/>
                        <RarityFilter/>
                    </div>

                    <div className="section-filter-container">
                        <TypeFilter/>
                    </div>

                    <div className="section-filter-container">
                        <ManaCostFilter/>
                    </div>

                    <div className="section-filter-container">
                        <ArtistFilter/>
                        <SetFilter/>
                        <PowerToughnessFilter/>
                    </div>
                </div>

                <div className="filter-search-button-container">
                    <button
                        id="filter-search-button"
                        type="button"
                        onClick={paramsFilterSearch}
                        disabled={paramLoading}
                    >
                        filter search
                    </button>
                </div>

            </div>
            <DeckManagement/>
        </>
    );
};

export default CardFilters;