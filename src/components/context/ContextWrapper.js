import React, { useReducer, useState, useEffect, useMemo } from 'react'
import GlobalContext from './GlobalContext'
import dayjs from 'dayjs'

function savedDecksReducer(state, { type, payload }) {
    switch (type) {
        case "push":
            return [...state, payload];
        case "update":
            return state.map((evt) =>
                evt.id === payload.id ? payload : evt
            );
        case "delete":
            return state.filter((evt) => evt.id !== payload.id);
        default:
            throw new Error();
    }
}

function initDecks() {
    const storageDecks = localStorage.getItem("decks");
    const parsedDecks = storageDecks ? JSON.parse(storageDecks) : [];
    return parsedDecks;
}

export default function ContextWrapper(props) {
    const [showDeckModal, setShowDeckModal] = useState(false);
    const [selectedDeck, setSelectedDeck] = useState(null);
    const [decks, dispatchDecks] = useReducer(
        savedDecksReducer,
        [],
        initDecks
    );
    
    useEffect(() => {
        localStorage.setItem("decks", JSON.stringify(decks));
    }, [decks]);


    return (
        <GlobalContext.Provider
            value={{
                decks,
                dispatchDecks,
                selectedDeck,
                setSelectedDeck,
                showDeckModal,
                setShowDeckModal
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}
