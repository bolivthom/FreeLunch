import React, { useEffect, useState } from "react";
import Hook from "../../../../hooks/api/index"
import { fetchCards } from '../../../../hooks/api';
import { Link } from "react-router-dom";
//Icons
//import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

function AllCardsTemplate() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchCards().then((list) => setCards(list));
    }, []);

    return (
        <div class="grid">
            {cards.map((card)=> (
                <Link to={`/card/${card.url.split("/")[5]}`}>
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-name" id="blah">{card.name}</h3>
                        </div>
                        <div class="card-content">
                            <div class="content-header">
                                <div class="card-icon-group-header">
                                    <p>19BBY</p>
                                    <p>{card.species_names[0]}</p>
                                </div>
                            </div>
                            <hr id="card-hr" />
                            <div class="card-content-row">
                                <div class="card-icon-group">
                                    <p class="card-text">HOMEWORLD</p>
                                    <p>{card.homeworld_name}</p>
                                </div>
                            </div>
                            <div class="card-content-row">
                                <div class="card-icon-group">
                                    <p class="card-text">VEHICLES</p>
                                    <p>{card.vehicles.length}</p>
                                </div>
                            </div>
                            <div class="card-content-row">
                                <div class="card-icon-group">
                                    <p class="card-text">STARSHIP</p>
                                    <p>{card.starships.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default AllCardsTemplate;