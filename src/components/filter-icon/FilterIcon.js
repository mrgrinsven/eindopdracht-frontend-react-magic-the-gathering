import React from 'react';

import './FilterIcon.css'
const FilterIcon = ({iconImage}) => {
    return (
        <div className="icon-container">
            <img src={iconImage} alt={iconImage}/>
        </div>
    );
};

export default FilterIcon;