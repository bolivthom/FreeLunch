import React, { useEffect, useState } from "react";
import Hook from "../../../../hooks/api/index";
import { fetchCards } from "../../../../hooks/api";
import { Link, useParams } from "react-router-dom";
import AppSecondaryButton from "../../buttons/AppSecondayButton";
import GlobalContext from "../../../context/GlobalContext";
import { Col, Row } from "react-bootstrap";
import Popover from "@material-ui/core/Popover";
import CardTemplate from '../Card/CardTemplate';
import { filterByName } from '../../../helpers/utils';

//Icons
//import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

function CardsOfADeck() {
    const { id } = useParams();
    const { decks, searchTerm } = React.useContext(GlobalContext);
    const [deck, setDeck] = useState(null);
    const [items, setItems] = useState([])

    React.useEffect(() => {
        let tempDeck = decks.find((dec) => dec.id == id);
        if(tempDeck != deck) {
            setDeck(tempDeck);
            setItems(filterByName(tempDeck.items, searchTerm));
        }
    }, [decks]);

    React.useEffect(() => {
        if(deck?.items || items.length > 0) setItems(filterByName(deck.items, searchTerm));
    }, [searchTerm]);
    
    return (
        <div className="grid card-grid">
            {items.length === 0 && (
                <>
                <p>No Cards Added To Deck. Please add cards to the deck to view.</p>
                </>
            )}
            {items.map((card, index) => (
                <CardTemplate key={card.name} cardData={card} deckId={deck?.id} />
            ))}
        </div>
    );
}

export default CardsOfADeck;
