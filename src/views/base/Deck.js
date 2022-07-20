import * as React from "react";
import AppDeckListControls from "../../components/sections/AppDeckListControls";
import DeckTemplate from "../../components/base/cards/Decks/CardsOfADeck";

function Decks() {
    return (
        <div>
            <AppDeckListControls/>
            <DeckTemplate/>
        </div>
    );
}

export default Decks;