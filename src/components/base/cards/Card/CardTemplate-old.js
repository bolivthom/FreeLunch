import React, { useEffect, useState } from "react";
import { fetchCards } from '../../../../hooks/api';
import {
    useParams
  } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function CardTemplate({ match }) {
    const { id } = useParams()
    const [card, setCard] = useState(null);

    useEffect(() => {
        fetchCards(`https://swapi.dev/api/people/${id}`, true).then((items) => setCard(items[0]));
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
                            <Row >
                                <Col className='left' sm={6}>
                                    <p className='card-sex-container'>19BBY</p>
                                </Col>
                                <Col className='right'  sm={6}>
                                    <h3 className="card-name" id="blah">{card?.species_names[0]}</h3>
                                </Col>
                            </Row>
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
                    {card?.film_names.map((attrib) => (
                        <div className="card-content-row">
                            <div className="card-icon-group">
                                <p className="card-text">FILM</p>
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