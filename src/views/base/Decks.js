import * as React from "react";
import AppDeckListControls from "../../components/sections/AppDeckListControls";
import DecksTemplate from "../../components/base/cards/Decks/Decks";

function Decks() {
    return (
        <div>
            <AppDeckListControls/>
            <DecksTemplate/>
        </div>
    );
}

export default Decks;