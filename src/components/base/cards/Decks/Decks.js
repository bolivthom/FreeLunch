import React, { useEffect, useState, useContext } from "react";
import Hook from "../../../../hooks/api/index"
import { fetchCards } from '../../../../hooks/api';
import { ReactComponent as RebelAllianceSymbol } from '../../../../assets/rebel-symbol.svg'
import { ReactComponent as GalaticEmpireSymbol } from '../../../../assets/empire-symbol.svg'
import { ReactComponent as JediOrderSymbol } from '../../../../assets/jedi-symbol.svg'
import { Link } from "react-router-dom";
import DeckCardTemplate from '../Card/DeckCardTemplate'
import GlobalContext from '../../../context/GlobalContext'
//Icons
//import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

function Decks() {
    const { decks } = useContext(GlobalContext)
    const symbols = {
        rebel: <RebelAllianceSymbol />,
        empire: <GalaticEmpireSymbol />,
        jedi: <JediOrderSymbol />
    };

    return (
        <div className="grid card-grid">
            {decks.length === 0 && (
                <>
                <p>No Decks Created. Please create a Deck by pressing the Add Deck 
                + button above.</p>
                </>
            )}
            {decks.map((deck, index)=> (
                <DeckCardTemplate key={index} deckData={deck} />
            ))}
        </div>
    );
}

export default Decks;