import React, {useContext} from 'react';

import './TypeFilter.css'

import FilterButton from '../filter-button/FilterButton';
import {CardParamsContext} from '../../context/CardParamsContext';

const TypeFilter = () => {
    //context for filter search parameters and filter checkboxes
    const {filterParams, setFilterParams, typeFilter, setTypeFilter} = useContext(CardParamsContext);

    //handler for setting search parameters
    function  handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.checked;
        const paramValue = event.target.value;
        setTypeFilter({
            ...typeFilter,
            [changedFieldName]: newValue,
        });
        if (newValue) {
            setFilterParams({
                ...filterParams,
                types: filterParams.types + paramValue + ','
            });
        } else {
            setFilterParams({
                ...filterParams,
                types: filterParams.types.replace( paramValue + ',', '')
            });
        }
    }

    return (
        <div className="type-filter">
            <FilterButton
                id="creature"
                name="creature"
                filter={typeFilter.creature}
                changeHandler={handleChange}
                text="Creature"
                value="creature"
            />
            <FilterButton
                id="artifact"
                name="artifact"
                filter={typeFilter.artifact}
                changeHandler={handleChange}
                text="Artifact"
                value="artifact"
            />
            <FilterButton
                id="land"
                name="land"
                filter={typeFilter.land}
                changeHandler={handleChange}
                text="land"
                value="land"
            />
            <FilterButton
                id="instant"
                name="instant"
                filter={typeFilter.instant}
                changeHandler={handleChange}
                text="Instant"
                value="instant"
            />
            <FilterButton
                id="sorcery"
                name="sorcery"
                filter={typeFilter.sorcery}
                changeHandler={handleChange}
                text="Sorcery"
                value="sorcery"
            />
            <FilterButton
                id="enchantment"
                name="enchantment"
                filter={typeFilter.enchantment}
                changeHandler={handleChange}
                text="Enchantment"
                value="enchantment"
            />
            <FilterButton
                id="planeswalker"
                name="planeswalker"
                filter={typeFilter.planeswalker}
                changeHandler={handleChange}
                text="Planeswalker"
                value="planeswalker"
            />
        </div>
    );
};

export default TypeFilter;