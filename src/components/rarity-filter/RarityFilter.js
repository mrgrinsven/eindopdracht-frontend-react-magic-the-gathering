import React, {useState} from 'react';

import './RarityFilter.css';

import FilterButton from '../filter-button/FilterButton';

import Common from '../../assets/common.png';
import Uncommon from '../../assets/uncommon.png';
import Rare from '../../assets/rare.png';
import Mythic from '../../assets/mythic.png';

const RarityFilter = () => {
    const [rarityFilter, setRarityFilter] = useState({
        common: false,
        uncommon: false,
        rare: false,
        mythic: false,
    });

    function  handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.checked;
        setRarityFilter({
            ...rarityFilter,
            [changedFieldName]: newValue,
        });
    }

    return (
        <div className="rarity-filter">
            <FilterButton
                iconImage={Common}
                id="common"
                name="common"
                filter={rarityFilter.common}
                changeHandler={handleChange}
            />
            <FilterButton
                iconImage={Uncommon}
                id="uncommon"
                name="uncommon"
                filter={rarityFilter.uncommon}
                changeHandler={handleChange}
            />
            <FilterButton
                iconImage={Rare}
                id="rare"
                name="rare"
                filter={rarityFilter.rare}
                changeHandler={handleChange}
            />
            <FilterButton
                iconImage={Mythic}
                id="mythic"
                name="mythic"
                filter={rarityFilter.mythic}
                changeHandler={handleChange}
            />
        </div>
    );
};

export default RarityFilter;