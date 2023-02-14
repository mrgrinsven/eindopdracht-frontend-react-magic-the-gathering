import React, {useContext} from 'react';
import {CardParamsContext} from '../../context/CardParamsContext';

import './PowerToughnessFilter.css'

const PowerToughnessFilter = () => {
    const {filterParams, setFilterParams} = useContext(CardParamsContext);

    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.value;
        setFilterParams({
            ...filterParams,
            [changedFieldName]: newValue,
        });
    }

    return (
        <div className="power-toughness-container">
            <label
                htmlFor='power-select-box'
            >
                power
            </label>

            <select
                className="select-box"
                name='power'
                id='power-select-box'
                value={filterParams.power}
                onChange={handleChange}>
                <option value=''>-</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='gte10'>10+</option>
            </select>
            <p>/</p>
            <label
                htmlFor='delivery-frequency-select-box'
            >
                tougness
            </label>

            <select
                className="select-box"
                name='toughness'
                id='delivery-frequency-select-box'
                value={filterParams.toughness}
                onChange={handleChange}>
                <option value=''>-</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='gte10'>10+</option>
            </select>
        </div>
    );
};

export default PowerToughnessFilter;