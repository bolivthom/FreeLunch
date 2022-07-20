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

import { ReactComponent as StarshipIcon } from "../../../../assets/starship.svg";
import { ReactComponent as VehicleIcon } from "../../../../assets/vehicle.svg";
import { ReactComponent as WorldIcon } from "../../../../assets/world.svg";
import { ReactComponent as MaleIcon } from "../../../../assets/male.svg";
import { ReactComponent as FemaleIcon } from "../../../../assets/female.svg";



function AllCardsTemplate() {
  const [cards, setCards] = useState([]);

const { searchTerm } = React.useContext(GlobalContext);

  useEffect(() => {
    fetchCards().then((list) => { 
      setCards(filterByName(list, searchTerm))
    });
  }, [searchTerm]);


  function getGenderIcon(gender) {
    switch (gender) {
      case 'male':
        return <MaleIcon />;
        break;
      case 'female':
        return <FemaleIcon />;
      default:
        return ''
    }
  }

  /*
  function sortByYoungest() {

    let temp = card.slice()
    setSortButton2("sort_button1")
    setSortButton1("sort_button2")
    setSortButton3("sort_button2")
    
    tempPeople.sort(
        function (a, b) {
            let Abirth_year = a.birth_year.split("B")
            let A_age = Abirth_year[0]

            let Bbirth_year = b.birth_year.split("B")
            let B_age = Bbirth_year[0]

            if (A_age == 'unknown') {
                a.age = 0
            }
            else {
                a.age = parseFloat(A_age)
            }

            if (B_age == 'unknown') {
                b.age = 0
            }
            else {
                b.age = parseFloat(B_age)
            }
            return a.age - b.age
        }
    )
    //console.log(tempPeople) 
    setPeople(tempPeople)
    console.log(people)

}
*/

  return (
    <div className="grid card-grid">
      {cards.map((card, index) => (
        <CardTemplate key={index} cardData={card} summary={true}/>
      ))}
    </div>
  );
}

export default AllCardsTemplate;
