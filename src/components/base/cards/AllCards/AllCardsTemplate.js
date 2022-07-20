import React, { useEffect, useState } from "react";
import Hook from "../../../../hooks/api/index";
import { fetchCards } from "../../../../hooks/api";
import { Link } from "react-router-dom";
import AppSecondaryButton from "../../buttons/AppSecondayButton";
import GlobalContext from "../../../context/GlobalContext";
import { Col, Row } from "react-bootstrap";
import Popover from "@material-ui/core/Popover";
import CardTemplate from '../Card/CardTemplate';
import { filterByName } from '../../../helpers/utils';

//Icons
//import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

function AllCardsTemplate() {
  const [cards, setCards] = useState([]);

const { searchTerm } = React.useContext(GlobalContext);

  useEffect(() => {
    fetchCards().then((list) => { 
      setCards(filterByName(list, searchTerm))
    });
  }, [searchTerm]);

  return (
    <div className="grid card-grid">
      {cards.map((card, index) => (
        <CardTemplate key={index} cardData={card} summary={true}/>
      ))}
    </div>
  );
}

export default AllCardsTemplate;
