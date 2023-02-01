import React from 'react';

import './FilterButton.css'

const FilterButton = ({iconImage, id, name, filter, changeHandler, text, padding}) => {
    return (
        <>
            <label
                htmlFor={id}
                className={filter ? "icon-container icon-container-active" : "icon-container"}
                style={{
                    backgroundImage: `url(${iconImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: '80%',
                    backgroundRepeat: 'no-repeat',
                    padding: {padding},
                }}
            >
                <p>{text}</p>
            </label>
            <input
                className="none"
                type="checkbox"
                id={id}
                name={name}
                checked={filter}
                onChange={changeHandler}
            />
        </>
    );
};

export default FilterButton;