import React, {useContext} from 'react';

import './RarityFilter.css';

import FilterButton from '../filter-button/FilterButton';

import Common from '../../assets/common.png';
import Uncommon from '../../assets/uncommon.png';
import Rare from '../../assets/rare.png';
import Mythic from '../../assets/mythic.png';
import {CardParamsContext} from '../../context/CardParamsContext';

const RarityFilter = () => {
    const {filterParams, setFilterParams, rarityFilter, setRarityFilter} = useContext(CardParamsContext);

    function  handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.checked;
        const paramValue = event.target.value;
        setRarityFilter({
            ...rarityFilter,
            [changedFieldName]: newValue,
        });
        if (newValue) {
            setFilterParams({
                ...filterParams,
                rarity: filterParams.rarity + paramValue + '|'
            });
        } else {
            setFilterParams({
                ...filterParams,
                rarity: filterParams.rarity.replace( paramValue + '|', '')
            });
        }
    }

    return (
        <div className="rarity-filter">
            <FilterButton
                iconImage={Common}
                id="common"
                name="common"
                filter={rarityFilter.common}
                changeHandler={handleChange}
                value="common"
            />
            <FilterButton
                iconImage={Uncommon}
                id="uncommon"
                name="uncommon"
                filter={rarityFilter.uncommon}
                changeHandler={handleChange}
                value="uncommon"
            />
            <FilterButton
                iconImage={Rare}
                id="rare"
                name="rare"
                filter={rarityFilter.rare}
                changeHandler={handleChange}
                value="rare"
            />
            <FilterButton
                iconImage={Mythic}
                id="mythic"
                name="mythic"
                filter={rarityFilter.mythic}
                changeHandler={handleChange}
                value="mythic"
            />
        </div>
    );
};

export default RarityFilter;