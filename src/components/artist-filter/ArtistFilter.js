import React, {useContext} from 'react';
import {CardParamsContext} from '../../context/CardParamsContext';

import './ArtistFilter.css'

import FilterTextField from '../filter-text-field/FilterTextField';

const ArtistFilter = () => {
    //context for filter search parameters
    const {filterParams, setFilterParams} = useContext(CardParamsContext);

    //handler for setting search parameters
    function handleChange(event) {
        setFilterParams({
            ...filterParams,
            artist: event.target.value,
        });
    }

    return (
        <>
            <FilterTextField
                id="artist-name-search"
                placeholder="Artist Name Filter"
                changeHandler={handleChange}
                value={filterParams.artist}
            />
        </>
    );
};

export default ArtistFilter;