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
    const {setSearchParams, filterParams} = useContext(CardParamsContext);

    function paramsFilterSearch() {
        setSearchParams(filterParams)
    }

    return (
        <>
            <div className="filter-container">
                <CardNameSearch/>
                <div className="button-filter-container">
                    <ColorFilter/>
                    <TypeFilter/>
                    <ManaCostFilter/>
                    <RarityFilter/>
                    <div>
                        <ArtistFilter/>
                        <SetFilter/>
                        <PowerToughnessFilter/>
                    </div>

                </div>

                <button
                    id="filter-search-button"
                    type="button"
                    onClick={paramsFilterSearch}
                >
                    filter search
                </button>
            </div>
            <DeckManagement/>
        </>
    );
};

export default CardFilters;