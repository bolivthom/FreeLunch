import React, { useEffect, useState } from "react";
import Hook from "../../../../hooks/api/index";
import { fetchCards } from "../../../../hooks/api";
import { Link } from "react-router-dom";
import AppSecondaryButton from "../../buttons/AppSecondayButton";
import GlobalContext from "../../../context/GlobalContext";
import { Col, Row } from "react-bootstrap";
import Popover from "@material-ui/core/Popover";

//Icons
//import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

function AllCardsTemplate() {
  const [cards, setCards] = useState([]);
  const { decks, dispatchDecks } = React.useContext(GlobalContext);

  useEffect(() => {
    fetchCards().then((list) => setCards(list));
  }, []);

  const [popOverState, setPopOverState] = React.useState({
    anchorEl: null,
    popOverId: null,
  })

  const handleDeckSelection = (deck, card) => {
    let items = [...(deck?.items || [])];
    const cardJSON = JSON.stringify(card)
    const itemExists = !!items.find((item) => JSON.stringify(item) === cardJSON);
    if(itemExists) {
        items = items.map((item) => item.id === card.id ? card : item);
    } else {
        items.push(card);
    }

    dispatchDecks({
        type: 'update',
        payload: {
            ...deck,
            items
        }
    })
  }

  function handleControlClick(evt, id) {
    const anchorEl = evt.target.closest('.card-control');
    console.log({anchorEl, id})
    setPopOverState({
        anchorEl: anchorEl,
        popOverId: id
    })
  }

  function handleClose() {
    setPopOverState({
        anchorEl: null,
        popOverId: null,
    })
  }

  return (
    <div className="grid">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="card-header" style={{ position: "relative" }}>
            <h3 className="card-name" id="blah">
              {card.name}
            </h3>
            <div className="card-control" >
              <AppSecondaryButton
                Title={"+"}
                BackgroundColor={"#FFFFFF"}
                aria-describedby={popOverState.popOverId === index ? "simple-popover" : undefined}
                variant="contained"
                onClick={(evt) => handleControlClick(evt, index)}
              />
              <Popover
                id={popOverState.popOverId === index ? "simple-popover" : undefined}
                open={popOverState.popOverId === index}
                anchorEl={popOverState.anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <div className="dialog-box deck-selector">
                  <Row>
                    <Col sm="12" className="align-items-bottom">
                      <h4 className="clan-input-title">Select a Deck</h4>
                    </Col>
                    <Col sm="12">
                      <Row className="no-gutters">
                        {decks.map((deck, index) => (
                          <Col
                            key={index}
                            sm="12"
                            className="deck-option  p-1 d-flex justify-content-center"
                            onClick={() => { handleDeckSelection(deck, card)}}
                          >
                            <div>{deck.name} Deck</div>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Popover>
            </div>
          </div>
          <Link key={index} to={`/card/${card.url.split("/")[5]}`}>
            <div className="card-content">
              <div className="content-header">
                <div className="card-icon-group-header">
                  <p>19BBY</p>
                  <p>{card.species_names[0]}</p>
                </div>
              </div>
              <hr id="card-hr" />
              <div className="card-content-row">
                <div className="card-icon-group">
                  <p className="card-text">HOMEWORLD</p>
                  <p>{card.homeworld_name}</p>
                </div>
              </div>
              <div className="card-content-row">
                <div className="card-icon-group">
                  <p className="card-text">VEHICLES</p>
                  <p>{card.vehicles.length}</p>
                </div>
              </div>
              <div className="card-content-row">
                <div className="card-icon-group">
                  <p className="card-text">STARSHIP</p>
                  <p>{card.starships.length}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllCardsTemplate;
