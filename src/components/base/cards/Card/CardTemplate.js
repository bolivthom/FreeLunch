import React, { useEffect, useState } from "react";
import { fetchCards } from '../../../../hooks/api';
import {
    useParams
  } from "react-router-dom";

function CardTemplate({ match }) {
    const { id } = useParams()
    const [card, setCard] = useState(null);

    useEffect(() => {
        fetchCards(`https://swapi.dev/api/people/${id}`).then((items) => setCard(items[0]));
    }, []);

    return (
        <div className="grid">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-name" id="blah">{card?.name}</h3>
                </div>
                <div className="card-content">
                    <div className="content-header">
                        <div className="card-icon-group-header">
                            <p>19BBY</p>
                            <p>{card?.species_names[0]}</p>
                        </div>
                    </div>
                    <hr id="card-hr" />
                    <div className="card-content-row">
                        <div className="card-icon-group">
                            <p className="card-text">HOMEWORLD</p>
                            <p>{card?.homeworld_name}</p>
                        </div>
                    </div>
                    {card?.vehicle_names.map((attrib) => (
                        <div className="card-content-row">
                            <div className="card-icon-group">
                                <p className="card-text">VEHICLE</p>
                                <p>{attrib}</p>
                            </div>
                        </div>
                    ))}
                    {card?.starship_names.map((attrib) => (
                        <div className="card-content-row">
                            <div className="card-icon-group">
                                <p className="card-text">STARSHIP</p>
                                <p>{attrib}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardTemplate;