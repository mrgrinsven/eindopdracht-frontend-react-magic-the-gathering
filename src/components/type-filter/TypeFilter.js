import React, {useState} from 'react';

import './TypeFilter.css'

import FilterButton from '../filter-button/FilterButton';

const TypeFilter = () => {
    const [typeFilter, setTypeFilter] = useState({
        creature: false,
        artifact: false,
        instant: false,
        sorcery: false,
        land: false,
        enchantment: false,
        planeswalker: false,
    });

    function  handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.checked;
        setTypeFilter({
            ...typeFilter,
            [changedFieldName]: newValue,
        });
    }

    return (
        <div className="type-filter">
            <FilterButton
                id="creature"
                name="creature"
                filter={typeFilter.creature}
                changeHandler={handleChange}
                text="Creature"
            />
            <FilterButton
                id="artifact"
                name="artifact"
                filter={typeFilter.artifact}
                changeHandler={handleChange}
                text="Artifact"
            />
            <FilterButton
                id="instant"
                name="instant"
                filter={typeFilter.instant}
                changeHandler={handleChange}
                text="Instant"
            />
            <FilterButton
                id="sorcery"
                name="sorcery"
                filter={typeFilter.sorcery}
                changeHandler={handleChange}
                text="Sorcery"
            />
            <FilterButton
                id="land"
                name="land"
                filter={typeFilter.land}
                changeHandler={handleChange}
                text="land"
            />
            <FilterButton
                id="enchantment"
                name="enchantment"
                filter={typeFilter.enchantment}
                changeHandler={handleChange}
                text="Enchantment"
            />
            <FilterButton
                id="planeswalker"
                name="planeswalker"
                filter={typeFilter.planeswalker}
                changeHandler={handleChange}
                text="Planeswalker"
            />
        </div>
    );
};

export default TypeFilter;