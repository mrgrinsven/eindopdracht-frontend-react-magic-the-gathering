import React, {useContext} from 'react';
import {CardParamsContext} from '../../context/CardParamsContext'

import './ManaCostFilter.css';

import FilterButton from '../filter-button/FilterButton';

import ManaCost0 from '../../assets/0.png';
import ManaCost1 from '../../assets/1.png';
import ManaCost2 from '../../assets/2.png';
import ManaCost3 from '../../assets/3.png';
import ManaCost4 from '../../assets/4.png';
import ManaCost5 from '../../assets/5.png';
import ManaCost6 from '../../assets/6.png';
import ManaCost7 from '../../assets/7.png';
import ManaCost8 from '../../assets/8.png';
import ManaCost9 from '../../assets/9.png';
import ManaCost10 from '../../assets/10.png';
import ManaCostX from '../../assets/X.png';

const ManaCostFilter = () => {
        //context for filter search parameters and filter checkboxes
        const {filterParams, setFilterParams, manaFilter, setManaFilter} = useContext(CardParamsContext)

        //handler for setting search parameters
        function handleChange(event) {
                const changedFieldName = event.target.name;
                const newValue = event.target.checked;
                const paramValue = event.target.value;
                if(manaFilter.previous === changedFieldName){
                        setManaFilter({
                                ...manaFilter,
                                [changedFieldName]: newValue,
                                previous: changedFieldName,
                        });
                } else {
                        setManaFilter({
                                ...manaFilter,
                                [changedFieldName]:newValue,
                                [manaFilter.previous]: false,
                                previous: changedFieldName,
                        });
                }
                if(changedFieldName === 'costx') {
                        if (newValue) {
                                setFilterParams({
                                        ...filterParams,
                                        cmc: '',
                                        text: paramValue
                                });
                        } else {
                                setFilterParams({
                                        ...filterParams,
                                        cmc: '',
                                        text: '',
                                });
                        }
                } else {
                        if (newValue) {
                                setFilterParams({
                                        ...filterParams,
                                        cmc: paramValue,
                                });
                        } else {
                                setFilterParams({
                                        ...filterParams,
                                        cmc: '',
                                });
                        }
                }
        }

    return (
        <div className="mana-cost-filter">
            <FilterButton
                iconImage={ManaCost0}
                id="mana-cost0"
                name="cost0"
                filter={manaFilter.cost0}
                changeHandler={handleChange}
                value="0"
            />
            <FilterButton
                iconImage={ManaCost1}
                id="mana-cost1"
                name="cost1"
                filter={manaFilter.cost1}
                changeHandler={handleChange}
                value="1"
            />
            <FilterButton
                iconImage={ManaCost2}
                id="mana-cost2"
                name="cost2"
                filter={manaFilter.cost2}
                changeHandler={handleChange}
                value="2"
            />
            <FilterButton
                iconImage={ManaCost3}
                id="mana-cost3"
                name="cost3"
                filter={manaFilter.cost3}
                changeHandler={handleChange}
                value="3"
            />
            <FilterButton
                iconImage={ManaCost4}
                id="mana-cost4"
                name="cost4"
                filter={manaFilter.cost4}
                changeHandler={handleChange}
                value="4"
            />
            <FilterButton
                iconImage={ManaCost5}
                id="mana-cost5"
                name="cost5"
                filter={manaFilter.cost5}
                changeHandler={handleChange}
                value="5"
            />
            <FilterButton
                iconImage={ManaCost6}
                id="mana-cost6"
                name="cost6"
                filter={manaFilter.cost6}
                changeHandler={handleChange}
                value="6"
            />
            <FilterButton
                iconImage={ManaCost7}
                id="mana-cost7"
                name="cost7"
                filter={manaFilter.cost7}
                changeHandler={handleChange}
                value="7"
            />
            <FilterButton
                iconImage={ManaCost8}
                id="mana-cost8"
                name="cost8"
                filter={manaFilter.cost8}
                changeHandler={handleChange}
                value="8"
            />
            <FilterButton
                iconImage={ManaCost9}
                id="mana-cost9"
                name="cost9"
                filter={manaFilter.cost9}
                changeHandler={handleChange}
                value="9"
            />
            <FilterButton
                iconImage={ManaCost10}
                id="mana-cost10"
                name="cost10"
                filter={manaFilter.cost10}
                changeHandler={handleChange}
                value="gte10"
            />
            <FilterButton
                iconImage={ManaCostX}
                id="mana-costx"
                name="costx"
                filter={manaFilter.costx}
                changeHandler={handleChange}
                value=" X "
            />
        </div>
    );
};

export default ManaCostFilter;