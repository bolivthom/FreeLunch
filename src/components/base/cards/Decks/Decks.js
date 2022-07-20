import React, { useEffect, useState, useContext } from "react";
import Hook from "../../../../hooks/api/index"
import { fetchCards } from '../../../../hooks/api';
import { ReactComponent as RebelAllianceSymbol } from '../../../../assets/rebel-symbol.svg'
import { ReactComponent as GalaticEmpireSymbol } from '../../../../assets/empire-symbol.svg'
import { ReactComponent as JediOrderSymbol } from '../../../../assets/jedi-symbol.svg'
import { Link } from "react-router-dom";
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
                <Link key={index} to={`/deck/${deck.id}`}>
                    <div className="deck-card">
                        <div className={`deck-card-header card-${deck.clan}`}>
                            <div className="deck-card-title">{deck.name}</div>
                            <div className="deck-card-symbol">
                                {symbols[deck.clan]}
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="deck-card-number">
                                {deck.items?.length || 0}
                                {/* <div className="card-icon-group-header">
                                    <p>{deck.items?.length || 0}</p>
                                </div> */}
                            </div>
                            <div className="deck-card-subtitle">
                                total cards
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Decks;