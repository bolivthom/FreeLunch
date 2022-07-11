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
        <div className="grid">
            {cards.map((card, index)=> (
                <Link key={index} to={`/card/${card.url.split("/")[5]}`}>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-name" id="blah">{card.name}</h3>
                        </div>
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
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default AllCardsTemplate;