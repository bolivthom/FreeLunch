import React, { useEffect, useState, useContext } from "react";
import Hook from "../../../../hooks/api/index"
import { fetchCards } from '../../../../hooks/api';
import { Link } from "react-router-dom";
import GlobalContext from '../context/GlobalContext'
//Icons
//import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

function Decks() {
    const { decks } = useContext(GlobalContext)

    return (
        <div className="grid">
            {decks.map((deck, index)=> (
                <Link key={index} to={`/deck/${deck.id}`}>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-name" id="blah">{deck.name}</h3>
                        </div>
                        <div className="card-content">
                            <div className="content-header">
                                <div className="card-icon-group-header">
                                    <p>{deck.items.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Decks;