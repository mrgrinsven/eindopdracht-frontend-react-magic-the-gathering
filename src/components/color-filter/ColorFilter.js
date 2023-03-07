import React, {useContext} from 'react';
import {CardParamsContext} from '../../context/CardParamsContext';

import './ColorFilter.css';

import FilterButton from '../filter-button/FilterButton';

import WhiteMana from '../../assets/white-mana.png';
import BlueMana from '../../assets/blue-mana.png';
import BlackMana from '../../assets/black-mana.png';
import RedMana from '../../assets/red-mana.png';
import GreenMana from '../../assets/green-mana.png';


const ColorFilter = () => {
    const {filterParams, setFilterParams, colorFilter, setColorFilter} = useContext(CardParamsContext);

    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.checked;
        const paramValue = event.target.value;
        setColorFilter({
            ...colorFilter,
            [changedFieldName]: newValue,
        });
        if (newValue) {
            setFilterParams({
                ...filterParams,
                colorIdentity: filterParams.colorIdentity + paramValue + ',',
            });
        } else {
            setFilterParams({
                ...filterParams,
                colorIdentity: filterParams.colorIdentity.replace( paramValue + ',', ''),
            });
        }
    }

    return (
        <div className="color-filter">
            <FilterButton
                iconImage={WhiteMana}
                id="white-mana"
                name="white"
                filter={colorFilter.white}
                changeHandler={handleChange}
                value="W"
            />
            <FilterButton
                iconImage={BlueMana}
                id="blue-mana"
                name="blue"
                filter={colorFilter.blue}
                changeHandler={handleChange}
                value="U"
            />
            <FilterButton
                iconImage={BlackMana}
                id="black-mana"
                name="black"
                filter={colorFilter.black}
                changeHandler={handleChange}
                value="B"
            />
            <FilterButton
                iconImage={RedMana}
                id="red-mana"
                name="red"
                filter={colorFilter.red}
                changeHandler={handleChange}
                value="R"
            />
            <FilterButton
                iconImage={GreenMana}
                id="green-mana"
                name="green"
                filter={colorFilter.green}
                changeHandler={handleChange}
                value="G"
            />
        </div>
    );
};

export default ColorFilter;