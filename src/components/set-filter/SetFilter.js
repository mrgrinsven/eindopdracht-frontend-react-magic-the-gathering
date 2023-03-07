import React, {useContext} from 'react';
import {CardParamsContext} from "../../context/CardParamsContext";

import './SetFilter.css'

import FilterTextField from "../filter-text-field/FilterTextField";

const SetFilter = () => {
    const {filterParams, setFilterParams} = useContext(CardParamsContext);
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