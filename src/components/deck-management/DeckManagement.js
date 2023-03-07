import React, {useContext, useState} from 'react';

import './DeckManagement.css'

import {DeckContext} from '../../context/DeckContext';
import {CardParamsContext} from '../../context/CardParamsContext';

const DeckManagement = () => {
    const {
        deckList,
        setDeckList,
        savedDeckList,
        setSavedDeckList,
        selectedDeck,
        setSelectedDeck,
    } = useContext(DeckContext)

    const {pageCount, searchParams, setSearchParams} = useContext(CardParamsContext);

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
            setSavedDeckList(savedDeckList.filter(decks => decks !== selectedDeck));
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

    function pageHandler(event) {
        if (event.target.value === 'first') {
            setSearchParams({
                ...searchParams,
                page: 1,
            });
        }
        if (event.target.value === 'previous') {
            setSearchParams({
                ...searchParams,
                page: searchParams.page - 1,
            });
        }
        if (event.target.value === 'next') {
            setSearchParams({
                ...searchParams,
                page: searchParams.page + 1,
            });
        }
        if (event.target.value === 'last') {
            setSearchParams({
                ...searchParams,
                page: pageCount,
            });
        }
    }

    return (
        <div className="deck-management-container">
            <div className="deck-management-button-container">
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
            </div>

            {deckAction === 'current' &&
                <>
                    <div className="deck-management-info-container">
                        <p><strong>Current deck:</strong> {selectedDeck}</p>
                        <p> <strong>Cards in deck:</strong> {Object.values(deckList).reduce((acc, curr) => (acc = acc + curr['totalCardCount']), 0)}</p>
                    </div>
                </>
            }

            {deckAction === 'create' &&
                <>
                    <div className="deck-management-action-container">
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
                    <div className="deck-management-action-container">
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
                    <div className="deck-management-action-container">
                        <p>Are you sure?</p>
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
                    </div>
                </>
            }
            <div className="page-management-container">
                {window.location.pathname === '/card-search' &&
                    <>
                        <button
                            type="button"
                            className="previous-button deck-management-button"
                            value="first"
                            disabled={searchParams.page === 1 || pageCount === 1}
                            onClick={pageHandler}
                        >
                            first page
                        </button>

                        <button
                            type="button"
                            className="previous-button deck-management-button"
                            value="previous"
                            disabled={searchParams.page === 1 || pageCount === 1}
                            onClick={pageHandler}
                        >
                            previous page
                        </button>
                    </>
                }

                <button
                    type="button"
                    className="deck-management-button"
                    onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                >
                    back to top
                </button>

                {window.location.pathname === '/card-search' &&
                    <>
                        <button
                            type="button"
                            className="next-button deck-management-button"
                            value="next"
                            disabled={searchParams.page === pageCount || pageCount === 1 || pageCount === 0 || pageCount === null}
                            onClick={pageHandler}
                        >
                            next page
                        </button>

                        <button
                            type="button"
                            className="next-button deck-management-button"
                            value="last"
                            disabled={searchParams.page === pageCount || pageCount === 1 | pageCount === 0 || pageCount === null}
                            onClick={pageHandler}
                        >
                            last page
                        </button>
                    </>
                }

            </div>
        </div>
    );
};

export default DeckManagement;