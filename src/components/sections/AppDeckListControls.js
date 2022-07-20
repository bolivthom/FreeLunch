import * as React from "react";

//Components
import Searchbar from "../base/inputs/Searchbar";
import AppSecondaryButton from "../base/buttons/AppSecondayButton";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { Col, Row } from 'react-bootstrap';
import { ReactComponent as RebelAlliance } from '../../assets/RebelAlliance.svg'
import { ReactComponent as RebelAllianceSelected } from '../../assets/RebelAllianceSelected.svg'
import { ReactComponent as NoFaction } from '../../assets/NoFaction.svg'
import { ReactComponent as NoFactionSelected } from '../../assets/NoFactionSelected.svg'
import { ReactComponent as GalaticEmpire } from '../../assets/GalaticEmpire.svg'
import { ReactComponent as GalaticEmpireSelected } from '../../assets/GalaticEmpireSelected.svg'
import { ReactComponent as JediOrder } from '../../assets/JediOrder.svg'
import { ReactComponent as JediOrderSelected } from '../../assets/JediOrderSelected.svg'
import GlobalContext from '../../components/context/GlobalContext'


function AppDeckListControls() {
    const { decks, dispatchDecks } = React.useContext(GlobalContext)

    const [clan, setClan] = React.useState('none');
    const [deckName, setDeckName] =  React.useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const divRef = React.useRef();
    function handleClick() {
        setAnchorEl(divRef.current);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if(deckName.length > 0) {
                dispatchDecks({ type: 'push', payload: { id: decks.length + 1, name: deckName, clan }})
            } else {
                alert('You must enter a valid Deck Name')
            }
        console.log('do validate')
        }
    }

  return (
    <div className="deck-sub-nav">
      <Searchbar />
      
      <div ref={divRef}>
        <AppSecondaryButton
          Title={"+"}
          BackgroundColor={"#FFFFFF"}
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="dialog-box">
            <Row>
                <Col sm='4' className="align-items-bottom">
                    <h4 className="deck-input-title">Faction</h4>
                </Col>
                <Col sm='8' >
                   <Row className="no-gutters" >
                     <Col sm='3' className=" p-1 d-flex justify-content-center">
                        {clan === 'rebel' ? ( <RebelAllianceSelected /> ) : <RebelAlliance onClick={() => setClan('rebel')}/>}
                     </Col>
                     <Col sm='3' className=" p-1 d-flex justify-content-center">
                        {clan === 'jedi' ? ( <JediOrderSelected /> ) : <JediOrder  onClick={() => setClan('jedi')}/>}
                     </Col>
                     <Col sm='3' className=" p-1 d-flex justify-content-center">
                        {clan === 'empire' ? ( <GalaticEmpireSelected /> ) : <GalaticEmpire  onClick={() => setClan('empire')}/>}
                     </Col>
                     <Col sm='3' className=" p-1 d-flex justify-content-center">
                        {clan === 'none' ? ( <NoFactionSelected /> ) : <NoFaction  onClick={() => setClan('none')}/>}
                     </Col>
                   </Row>
                </Col>
            </Row>
            <Row>
                <Col sm='12' className="align-items-bottom">
                    <label className='deck-input-label' htmlFor='clan-name'>Deck Name</label>
                    <input className='deck-input' id='deck-name' onChange={(evt) => setDeckName(evt.target.value)} onKeyDown={handleKeyDown}></input>
                </Col>
            </Row>
        </div>
      </Popover>
    </div>
  );
}

export default AppDeckListControls;
