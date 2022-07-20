import React from 'react'

const GlobalContext = React.createContext({
    decks: [],
    dispatchDecks: ({ type, payload }) => {},
    selectedDeck: null,
    setSelectedDeck: () => {},
    showDeckModal: () => {},
    setShowDeckModal: () => {},
    searchTerm: '',
    setSearchTerm: () => {},
})

export default GlobalContext;