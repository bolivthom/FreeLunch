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
    sortBy: 'name_asc',
    setSortBy: () => {},
})

export default GlobalContext;