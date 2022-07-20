import React, { useEffect, useMemo, useState } from "react";
import { fetchCards, loadCardDetails } from '../../../../hooks/api';
import AppSecondaryButton from "../../buttons/AppSecondayButton";
import GlobalContext from "../../../context/GlobalContext";
import { Col, Row } from "react-bootstrap";
import Popover from "@material-ui/core/Popover";
import { ReactComponent as MoveIcon } from '../../../../assets/move-icon.svg';
import { ReactComponent as TrashIcon } from '../../../../assets/dump-icon.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/plus-icon.svg';
import { ReactComponent as PinIcon } from '../../../../assets/pin-icon.svg';
import { ReactComponent as SexIcon } from '../../../../assets/sex-icon.svg';
import { ReactComponent as StarshipIcon } from '../../../../assets/starship-icon.svg';
import { ReactComponent as VehicleIcon } from '../../../../assets/vehicle-icon.svg';
import { ReactComponent as HomeworldIcon } from '../../../../assets/homeworld-icon.svg';


import {
    useParams
  } from "react-router-dom";
import { Link } from "react-router-dom";

function CardTemplate({ cardData = null, summary = false, deckId = 0 }) {
    const { id } = useParams()
    const [card, setCard] = useState(cardData);
    const [cardDeck, setCardDeck] = useState(cardData);
    const { decks, dispatchDecks } = React.useContext(GlobalContext);

    useEffect(() => {
      if(!card)
        fetchCards(`https://swapi.dev/api/people/${id}`, true).then((items) => setCard(items[0]));

      const tDeck = decks.find((deck)=> deck.id == deckId);
      setCardDeck(tDeck);
    }, []);

    // const deckCards = useMemo(() => {
    //   decks.map((deck) => deck?.items?.map((card) => ({...card, deck_id: deck.id})))
    //   .flat(Infinity)
    // }, [decks])

    const [popOverState, setPopOverState] = React.useState({
      anchorEl: null,
      popOverId: null,
    })

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

    // console.log({cardDeck})

    const handleDeckDeletion = async () => {
      let items = [...(cardDeck?.items || [])];
      const cardJSON = JSON.stringify(card)
      const filteredItems = items.filter((item) => JSON.stringify(item) !== cardJSON);
      dispatchDecks({
          type: 'update',
          payload: {
              ...cardDeck,
              items: filteredItems
          }
      })
      
    }

    const handleDeckSelection = async (deck, card) => {
      let items = [...(deck?.items || [])];
      const cardJSON = JSON.stringify(card)
      const itemExists = !!items.find((item) => JSON.stringify(item) === cardJSON);
      let cardItem = card?.complete ? card : await loadCardDetails(card);
      if(itemExists) {
          items = items.map((item) => item.id == card?.id ? cardItem : item);
      } else {
          items.push(cardItem);
      }
      console.log('Card ITem', cardItem)
      if(Object.keys(cardItem).length > 0){

        if(deckId > 0){
            // deckCards.find((deckCard) => deckCard.deck_id !== deckId && deckCard.id === cardItem.id)
            const cardDeckItems = cardDeck.items.filter((deckCard)=> JSON.stringify(deckCard) !== cardJSON);
            const newCardDeck = JSON.parse(JSON.stringify(cardDeck));
            console.log('PRECURSOR', {
              cardDeckItems,
              newCardDeck,
              origitems: cardDeck.items,
              cardItemId: cardItem.id,
            })
            dispatchDecks({
                type: 'update',
                payload: {
                    ...newCardDeck,
                    items: cardDeckItems
                }
            })

        }
        dispatchDecks({
            type: 'update',
            payload: {
                ...deck,
                items
            }
        })
      }
    }

    // console.log('CARD', card);

    return (

        <>
          <div className="card">
            <div className="card-header" style={{ position: "relative" }}>
              <div className="card-pin">
                <PinIcon />
              </div>
              <div className="card-control">
                {deckId > 0 && (
                  <>
                    <AppSecondaryButton
                      Title={<MoveIcon />}
                      BackgroundColor={"#FFFFFF"}
                      aria-describedby={`simple-popover-${id}`}
                      variant="contained"
                      onClick={(evt) => handleControlClick(evt, id)} />
                    <AppSecondaryButton
                      Title={<TrashIcon />}
                      BackgroundColor={"#FFFFFF"}
                      aria-describedby={`simple-popover-${id}`}
                      variant="contained"
                      onClick={(evt) => handleDeckDeletion(evt, id)} />
                  </>
                )}
                {summary && (
                  <AppSecondaryButton
                    Title={<PlusIcon />}
                    BackgroundColor={"#FFFFFF"}
                    aria-describedby={`simple-popover-${id}`}
                    variant="contained"
                    onClick={(evt) => handleControlClick(evt, id)} />
                )}
              </div>
              <h3 className="card-name" id="card_name">
                {card?.name}
              </h3>
            </div>
            <Link to={card?.url ? `/card/${card?.url.split("/")[5]}` : '#'}>
              <div className="card-content">
                <div className="content-header">
                    {/* <div className="card-icon-group-header"> */}
                        <Row >
                            <Col className='left' sm={6}>
                                <p className='card-sex'>
                                  <SexIcon /> <span >  19BBY</span>
                                </p>
                            </Col>
                            <Col className='right'  sm={6}>
                                <h3 className="card-sex" id="blah">{card?.species_names[0]}</h3>
                            </Col>
                        </Row>
                    {/* </div> */}
                </div>
                <hr id="card-hr" />
                <div className="card-content-row">
                  <div className="card-icon-group">
                    <HomeworldIcon />
                    <p>HOMEWORLD</p>
                  </div>
                  <p className="card-text">{card?.homeworld_name}</p>
                </div>
                {summary ? (
                  <div className="card-content-row">
                    <div className="card-icon-group">
                    <VehicleIcon /> 
                      <p>VEHICLES</p>
                    </div>
                    <p className="card-text">{card?.vehicles.length}</p>
                  </div>
                  ) : (
                    card?.vehicle_names.map((attrib, idx) => (
                      <div key={idx}  className="card-content-row">
                        <div className="card-icon-group">
                        <VehicleIcon /> 
                          <p>VEHICLES</p>
                        </div>
                        <p className="card-text">{attrib}</p>
                      </div>
                    ))
                )}
                {summary  ? (
                  <div className="card-content-row">
                    <div className="card-icon-group">
                    <StarshipIcon /> 
                      <p>STARSHIP</p>
                    </div>
                    <p className="card-text">{card?.starships.length}</p>
                  </div>
                  ) : (
                  card?.starship_names.map((attrib, idx) => (
                    <div key={idx}  className="card-content-row">
                      <div className="card-icon-group">
                      <StarshipIcon /> 
                        <p>STARSHIP</p>
                      </div>
                      <p className="card-text">{attrib}</p>
                    </div>
                  ))
                )}
              </div>
            </Link>
          </div>
          <Popover
            id={`simple-popover-${id}`}
            open={popOverState.popOverId === id}
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
                  <h4 className="popover-title">Select a Deck</h4>
                    <hr/>
                </Col>
                {decks
                  .filter((deck)=> deck.id != deckId)
                  .map((deck, index) => (
                    <Col
                      key={index}
                      sm="12"
                      onClick={() => { handleDeckSelection(deck, card); } }
                    >
                      <div className="deck-option  p-1">
                      <p className='deck-option-text'>{deck.name} Deck</p>
                      </div>
                    </Col>
                ))}
              </Row>

            </div>
          </Popover>
        </>
        
    );
}

export default CardTemplate;