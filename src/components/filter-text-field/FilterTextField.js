import React from 'react';

import './FilterTextField.css'

const FilterTextField = ({id, placeholder, changeHandler, value}) => {
    return (
        <div className="text-container">
            <label htmlFor={id}></label>
            <input
                className="text-search"
                type="search"
                id={id}
                name={id}
                placeholder={placeholder}
                onChange={changeHandler}
                value={value}
            />
        </div>
    );
};

export default FilterTextField;