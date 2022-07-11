import React, { useEffect, useState } from "react";
import { fetchCard } from '../../../../hooks/api';
import {
    useParams
  } from "react-router-dom";

function CardTemplate({ match }) {
    const { id } = useParams()
    const [card, setCard] = useState(null);

    useEffect(() => {
        fetchCard(`https://swapi.dev/api/people/${id}`).then((item) => setCard(item));
    }, []);

    return (
        <div class="grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-name" id="blah">{card?.name}</h3>
                </div>
                <div class="card-content">
                    <div class="content-header">
                        <div class="card-icon-group-header">
                            <p>19BBY</p>
                            <p>{card?.species_names[0]}</p>
                        </div>
                    </div>
                    <hr id="card-hr" />
                    <div class="card-content-row">
                        <div class="card-icon-group">
                            <p class="card-text">HOMEWORLD</p>
                            <p>{card?.homeworld_name}</p>
                        </div>
                    </div>
                    {card?.vehicle_names.map((attrib) => (
                        <div class="card-content-row">
                            <div class="card-icon-group">
                                <p class="card-text">VEHICLE</p>
                                <p>{attrib}</p>
                            </div>
                        </div>
                    ))}
                    {card?.starship_names.map((attrib) => (
                        <div class="card-content-row">
                            <div class="card-icon-group">
                                <p class="card-text">STARSHIP</p>
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