import React, {useContext} from 'react';
import {CardParamsContext} from "../../context/CardParamsContext";

import './SetFilter.css'

import FilterTextField from "../filter-text-field/FilterTextField";

const SetFilter = () => {
    //context for search parameters
    const {filterParams, setFilterParams} = useContext(CardParamsContext);

    //handler for setting search parameters
    function handleChange(event) {
        setFilterParams({
            ...filterParams,
            setName: event.target.value,
        });
    }
    return (
        <>
            <FilterTextField
                id="set-search"
                placeholder="Set Filter"
                changeHandler={handleChange}
                value={filterParams.setName}
            />
        </>
    );
};

export default SetFilter;