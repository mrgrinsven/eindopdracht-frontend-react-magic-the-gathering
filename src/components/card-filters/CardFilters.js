import React from 'react';

import './CardFilters.css';

import FilterIcon from '../filter-icon/FilterIcon';

import SearchIcon from '../../assets/search_icon.png';
import WhiteMana from '../../assets/white-mana.png';
import BlueMana from '../../assets/blue-mana.png';
import BlackMana from '../../assets/black-mana.png';
import RedMana from '../../assets/red-mana.png';
import GreenMana from '../../assets/green-mana.png';
import ColorlessMana from '../../assets/colorless-mana.png';
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
import Common from '../../assets/common.png';
import Uncommon from '../../assets/uncommon.png';
import Rare from '../../assets/rare.png';
import Mythic from '../../assets/mythic.png';

const CardFilters = () => {
    return (
        <div className="filter-container">
            <div className="name-search-container">
                <div className="input-container">
                    <label htmlFor="name-search"></label>
                    <input type="search"
                           id="name-search"
                           name="name-search"
                           placeholder="Search by Card Name"/>
                    <button id="name-search-button"
                            type="button"
                    >
                        <img
                            src={SearchIcon}
                            alt="Search icon"
                        />
                    </button>
                </div>
            </div>
            <div className="icon-filter-container">
                <div className="color-filter">
                    <FilterIcon
                        iconImage={WhiteMana}
                    />
                    <FilterIcon
                        iconImage={BlueMana}
                    />
                    <FilterIcon
                        iconImage={BlackMana}
                    />
                    <FilterIcon
                        iconImage={RedMana}
                    />
                    <FilterIcon
                        iconImage={GreenMana}
                    />
                    <FilterIcon
                        iconImage={ColorlessMana}
                    />
                </div>
                <div className="type-filter">
                    <ul className="type-list">
                        <li className="type-item">Creature</li>
                        <li className="type-item">Artifact</li>
                        <li className="type-item">Instant</li>
                        <li className="type-item">Sorcery</li>
                        <li className="type-item">Land</li>
                        <li className="type-item">Enchantment</li>
                        <li className="type-item">Planeswalker</li>
                    </ul>
                </div>
                <div className="mana-cost-filter">
                    <FilterIcon
                        iconImage={ManaCost0}
                    />
                    <FilterIcon
                        iconImage={ManaCost1}
                    />
                    <FilterIcon
                        iconImage={ManaCost2}
                    />
                    <FilterIcon
                        iconImage={ManaCost3}
                    />
                    <FilterIcon
                        iconImage={ManaCost4}
                    />
                    <FilterIcon
                        iconImage={ManaCost5}
                    />
                    <FilterIcon
                        iconImage={ManaCost6}
                    />
                    <FilterIcon
                        iconImage={ManaCost7}
                    />
                    <FilterIcon
                        iconImage={ManaCost8}
                    />
                    <FilterIcon
                        iconImage={ManaCost9}
                    />
                    <FilterIcon
                        iconImage={ManaCost10}
                    />
                    <FilterIcon
                        iconImage={ManaCostX}
                    />
                </div>
                <div className="rarity-filter">
                    <FilterIcon
                        iconImage={Common}
                    />
                    <FilterIcon
                        iconImage={Uncommon}
                    />
                    <FilterIcon
                        iconImage={Rare}
                    />
                    <FilterIcon
                        iconImage={Mythic}
                    />
                </div>
            </div>
            <button
                id="filter-search-button"
                type="button"
            >
                search
            </button>
        </div>
    );
};

export default CardFilters;