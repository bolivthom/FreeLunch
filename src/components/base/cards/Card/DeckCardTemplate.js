import React, { useEffect, useMemo, useState } from "react";
import { fetchCards, loadCardDetails } from '../../../../hooks/api';
import AppSecondaryButton from "../../buttons/AppSecondayButton";
import GlobalContext from "../../../context/GlobalContext";
import { Col, Row } from "react-bootstrap";
import Popover from "@material-ui/core/Popover";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as MoveIcon } from '../../../../assets/move-icon.svg';
import { ReactComponent as LightTrashIcon } from '../../../../assets/light-dump-icon.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/plus-icon.svg';
import { ReactComponent as PinIcon } from '../../../../assets/pin-icon.svg';
import { ReactComponent as StackIcon } from '../../../../assets/stack-icon.svg';
import { ReactComponent as StarshipIcon } from '../../../../assets/starship-icon.svg';
import { ReactComponent as VehicleIcon } from '../../../../assets/vehicle-icon.svg';
import { ReactComponent as HomeworldIcon } from '../../../../assets/homeworld-icon.svg';
import { ReactComponent as RebelAllianceSymbol } from '../../../../assets/rebel-symbol.svg'
import { ReactComponent as GalaticEmpireSymbol } from '../../../../assets/empire-symbol.svg'
import { ReactComponent as JediOrderSymbol } from '../../../../assets/jedi-symbol.svg'

function DeckCardTemplate({ deckData }) {
    const symbols = {
        rebel: <RebelAllianceSymbol />,
        empire: <GalaticEmpireSymbol />,
        jedi: <JediOrderSymbol />
    };

    return (
        
      <Link  to={`/deck/${deckData.id}`}>
          <div className="deck-card">
            <div className={`card-header deck-card-header card-${deckData.clan}`} style={{ position: "relative" }}>
              <div className="card-pin">
                <StackIcon />
              </div>
              <div className="card-control">
                <AppSecondaryButton
                  Title={<LightTrashIcon />}
                  BackgroundColor={'#00000099'}
                  aria-describedby={`simple-popover-${deckData.id}`}
                  variant="contained"
                  onClick={(evt) => null} 
                  />
              </div>
              <h3 className="card-name" id="card_name">
                {deckData?.name}
              </h3>
              <div className="deck-card-symbol">
                  {symbols[deckData.clan]}
              </div>
            </div>
            <div className="deck-card-content">
                <div className="deck-card-number">
                    {deckData.items?.length || 0}
                    {/* <div className="card-icon-group-header">
                        <p>{deck.items?.length || 0}</p>
                    </div> */}
                </div>
                <div className="deck-card-subtitle">
                    total cards
                </div>
            </div>
          </div>
        </Link>
        
    );
}

export default DeckCardTemplate;