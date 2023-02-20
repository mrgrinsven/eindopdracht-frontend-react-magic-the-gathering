import React, {useContext, useState} from 'react';

import './DeckManagement.css'
import {DeckContext} from "../../context/DeckContext";

const DeckManagement = () => {
    const {
        deckList,
        setDeckList,
        savedDeckList,
        setSavedDeckList,
        selectedDeck,
        setSelectedDeck
    } = useContext(DeckContext)

    const [deckAction, setDeckAction] = useState('current');
    const [createDeckName, setCreateDeckName] = useState('');
    const [selectDeckOptions, setSelectDeckOptions] = useState(selectedDeck);
    const [deckNameError, setDeckNameError] = useState(false);

    function deckActionHandler(event) {
        const newValue = event.target.value
        if (event.target.name === 'create' || event.target.name === 'create-deck-name-field') {
            if (savedDeckList.includes(createDeckName) || createDeckName === '') {
                setDeckNameError(true);
            } else {
                setSavedDeckList([
                    ...savedDeckList,
                    createDeckName
                ]);
                setDeckList({});
                setSelectedDeck(createDeckName)
                setCreateDeckName('');
                setDeckNameError(false);
                setDeckAction('current');
            }
        } else if (event.target.name === 'load') {
            setSelectedDeck(selectDeckOptions);
            setDeckList(JSON.parse(localStorage.getItem(selectDeckOptions)));
            setDeckAction('current');
        } else if (event.target.name === 'delete') {
            setSavedDeckList(savedDeckList.filter(decks =>  decks !== selectedDeck));
            setDeckList({});
            localStorage.removeItem(selectedDeck)
            setSelectedDeck('none');
            setDeckAction('current');
        } else {
            setDeckAction(newValue);
        }

        if (event.target.name === 'cancel-create') {
            setCreateDeckName('');
            setDeckNameError(false);
        }
    }

    function createDeckNameHandleChange(event) {
        const newValue = event.target.value
        setCreateDeckName(newValue);
    }

    return (
        <div className="deck-management-container">
            <button
                className="deck-management-button"
                type="button"
                value="create"
                onClick={deckActionHandler}
            >
                Create New Deck
            </button>
            <button
                className="deck-management-button"
                type="button"
                value="load"
                disabled={savedDeckList.length === 0}
                onClick={deckActionHandler}
            >
                Load Deck
            </button>

            <button
                className="deck-management-button"
                type="button"
                value="delete"
                disabled={savedDeckList.length === 0 || selectedDeck === 'none'}
                onClick={deckActionHandler}
            >
                Delete Deck
            </button>

            {deckAction === 'current' &&
                <>
                    <div>
                        <p>Current deck: {selectedDeck}</p>
                    </div>
                </>
            }

            {deckAction === 'create' &&
                <>
                    <div>
                        <label htmlFor="create-deck-name-field"></label>
                        <input
                            className="create-deck-name-field"
                            type="search"
                            id="create-deck-name-field"
                            name="create-deck-name-field"
                            placeholder="Type Deck Name Here"
                            maxLength="24"
                            onChange={createDeckNameHandleChange}
                            onKeyUp={event => event.key === 'Enter' && event.target.blur()}
                            value={createDeckName}
                        />
                        <button
                            className="deck-management-button"
                            name="create"
                            type="button"
                            onClick={deckActionHandler}
                        >
                            create
                        </button>
                        <button
                            className="deck-management-button"
                            name="cancel-create"
                            type="button"
                            value="current"
                            onClick={deckActionHandler}
                        >
                            cancel
                        </button>
                        {deckNameError === true &&
                            <p className="error-deck-management">deck already exists or is empty</p>
                        }
                    </div>
                </>
            }

            {deckAction === 'load' &&
                <>
                    <div>
                        <label htmlFor="load-deck">Select Deck</label>
                        <select
                            name="load-deck"
                            id="load-deck"
                            value={selectDeckOptions}
                            onChange={(event) => setSelectDeckOptions(event.target.value)}
                        >
                            <option value="none">Select deck</option>
                            {savedDeckList.length > 0 &&
                                <>
                                    {savedDeckList.map((deck) => {
                                        return (
                                            <option
                                                value={deck}
                                                key={deck}
                                            >
                                                {deck}
                                            </option>
                                        );
                                    })}
                                </>
                            }

                        </select>
                        <button
                            className="deck-management-button"
                            type="button"
                            name="load"
                            disabled={selectDeckOptions === 'none'}
                            onClick={deckActionHandler}
                        >load
                        </button>
                        <button
                            className="deck-management-button"
                            type="button"
                            value="current"
                            onClick={deckActionHandler}
                        >
                            cancel
                        </button>
                    </div>

                </>
            }

            {deckAction === 'delete' &&
                <>
                    <div>
                        <p>Are you sure?
                            <button
                                className="deck-management-button"
                                type="button"
                                name="delete"
                                onClick={deckActionHandler}
                            >
                                delete
                            </button>
                            <button
                                className="deck-management-button"
                                type="button"
                                value="current"
                                onClick={deckActionHandler}
                            >
                                cancel
                            </button>
                        </p>
                    </div>
                </>
            }

        </div>
    );
};

export default DeckManagement;