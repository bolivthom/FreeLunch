import React, { useEffect, useState } from "react";
import Hook from "../../../../hooks/api/index";
import { fetchCards } from "../../../../hooks/api";
import { Link, useParams } from "react-router-dom";
import AppSecondaryButton from "../../buttons/AppSecondayButton";
import GlobalContext from "../../../context/GlobalContext";
import { Col, Row } from "react-bootstrap";
import Popover from "@material-ui/core/Popover";
import CardTemplate from '../Card/CardTemplate';

//Icons
//import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

function CardsOfADeck() {
    const { id } = useParams();
    const { decks } = React.useContext(GlobalContext);
    const [deck, setDeck] = useState(null)

    React.useEffect(() => {
        let tempDeck = decks.find((dec) => dec.id == id);
        if(tempDeck != deck) {
            setDeck(tempDeck);
        }
    }, [decks]);
    
    return (
        <div className="grid card-grid">
            {deck?.items?.map((card, index) => (
                <CardTemplate key={card.name} cardData={card} deckId={deck?.id} />
            ))}
        </div>
    );
}

export default CardsOfADeck;
