// import React, { useEffect, useState } from "react";
// import Hook from "../../../../hooks/api/index";
// import { fetchCards } from "../../../../hooks/api";
// import { Link } from "react-router-dom";
// import AppSecondaryButton from "../../buttons/AppSecondayButton";
// import GlobalContext from "../../../context/GlobalContext";
// import { Col, Row } from "react-bootstrap";
// import Dialog from "@material-ui/core/Popover";

// //Icons
// //import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

// function Popover() {
//   const [cards, setCards] = useState([]);
//   const { decks, dispatchDecks } = React.useContext(GlobalContext);

//   useEffect(() => {
//     fetchCards().then((list) => setCards(list));
//   }, []);

//   const [popOverState, setPopOverState] = React.useState({
//     anchorEl: null,
//     popOverId: null,
//   })

//   const handleDeckSelection = (deck, card) => {
//     let items = [...(deck?.items || [])];
//     const cardJSON = JSON.stringify(card)
//     const itemExists = !!items.find((item) => JSON.stringify(item) === cardJSON);
//     if(itemExists) {
//         items = items.map((item) => item.id === card.id ? card : item);
//     } else {
//         items.push(card);
//     }

//     dispatchDecks({
//         type: 'update',
//         payload: {
//             ...deck,
//             items
//         }
//     })
//   }

//   function handleControlClick(evt, id) {
//     const anchorEl = evt.target.closest('.card-control');
//     console.log({anchorEl, id})
//     setPopOverState({
//         anchorEl: anchorEl,
//         popOverId: id
//     })
//   }

//   function handleClose() {
//     setPopOverState({
//         anchorEl: null,
//         popOverId: null,
//     })
//   }

//   return (
//     <Dialog
//     id={popOverState.popOverId === index ? "simple-popover" : undefined}
//     open={popOverState.popOverId === index}
//     anchorEl={popOverState.anchorEl}
//     onClose={handleClose}
//     anchorOrigin={{
//         vertical: "bottom",
//         horizontal: "right",
//     }}
//     transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//     }}
//     >
//     <div className="dialog-box deck-selector">
//         <Row>
//         <Col sm="12" className="align-items-bottom">
//             <h4 className="clan-input-title">Select a Deck</h4>
//         </Col>
//         <Col sm="12">
//             <Row className="no-gutters">
//             {decks.map((deck, index) => (
//                 <Col
//                 key={index}
//                 sm="12"
//                 className="deck-option  p-1 d-flex justify-content-center"
//                 onClick={() => { handleDeckSelection(deck, card)}}
//                 >
//                 <div>{deck.name} Deck</div>
//                 </Col>
//             ))}
//             </Row>
//         </Col>
//         </Row>
//     </div>
//     </Dialog>
//   );
// }

// export default Popover;
