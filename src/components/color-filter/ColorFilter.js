import React, {useState} from 'react';

import './ColorFilter.css';

import FilterButton from '../filter-button/FilterButton';

import WhiteMana from '../../assets/white-mana.png';
import BlueMana from '../../assets/blue-mana.png';
import BlackMana from '../../assets/black-mana.png';
import RedMana from '../../assets/red-mana.png';
import GreenMana from '../../assets/green-mana.png';
import ColorlessMana from '../../assets/colorless-mana.png';

const ColorFilter = () => {
    const [colorFilter, setColorFilter] = useState({
        white: false,
        blue: false,
        black: false,
        red: false,
        green: false,
        colorless: false,
    });

    function  handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.checked;
        setColorFilter({
            ...colorFilter,
            [changedFieldName]: newValue,
        });
    }

    return (
        <div className="color-filter">
            <FilterButton
                iconImage={WhiteMana}
                id="white-mana"
                name="white"
                filter={colorFilter.white}
                changeHandler={handleChange}
            />
            <FilterButton
                iconImage={BlueMana}
                id="blue-mana"
                name="blue"
                filter={colorFilter.blue}
                changeHandler={handleChange}
            />
            <FilterButton
                iconImage={BlackMana}
                id="black-mana"
                name="black"
                filter={colorFilter.black}
                changeHandler={handleChange}
            />
            <FilterButton
                iconImage={RedMana}
                id="red-mana"
                name="red"
                filter={colorFilter.red}
                changeHandler={handleChange}
            />
            <FilterButton
                iconImage={GreenMana}
                id="green-mana"
                name="green"
                filter={colorFilter.green}
                changeHandler={handleChange}
            />
            <FilterButton
                iconImage={ColorlessMana}
                id="colorless-mana"
                name="colorless"
                filter={colorFilter.colorless}
                changeHandler={handleChange}
            />
        </div>
    );
};

export default ColorFilter;