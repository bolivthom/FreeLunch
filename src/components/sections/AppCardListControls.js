import * as React from "react";
import { Link } from "react-router-dom";

import { Row, Col } from 'react-bootstrap'
//Icons
import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

//Components
import Searchbar from "../base/inputs/Searchbar";
import AppSecondaryButton from "../base/buttons/AppSecondayButton";
import AppPrimaryButton from "../base/buttons/AppPrimaryButton";
import GlobalContext from '../../components/context/GlobalContext'

const styles = {
    cardControls: {
        marginRight: '6px'
    }
}
function AppCardControls() {

    const { sortBy, setSortBy } = React.useContext(GlobalContext)
    
    return (
        <div className="sub-nav">
            <Searchbar style={styles.cardControls}/>
            {
                sortBy === 'name_asc' ? (
                    <AppPrimaryButton style={styles.cardControls} Title={"A-Z"} BackgroundColor={"#FFFFFF"} onClick={() => setSortBy('name_asc')} />
                ) : (
                    <AppSecondaryButton style={styles.cardControls} Title={"A-Z"} BackgroundColor={"#E4E4E4"} onClick={() => setSortBy('name_asc')} />
                )
            }
            {
                sortBy === 'age_asc' ? (
                    <AppPrimaryButton style={styles.cardControls} Title={"Youngest"}  BackgroundColor={"#FFFFFF"} onClick={() => setSortBy('age_asc')} />
                ) : (
                    <AppSecondaryButton style={styles.cardControls} Title={"Youngest"} BackgroundColor={"#E4E4E4"} onClick={() => setSortBy('age_asc')} />
                )
            }
            {
                sortBy === 'age_desc' ? (
                    <AppPrimaryButton  style={styles.cardControls} Title={"Eldest"} BackgroundColor={"#FFFFFF"} onClick={() => setSortBy('age_desc')} />
                ) : (
                    <AppSecondaryButton  style={styles.cardControls} Title={"Eldest"} BackgroundColor={"#E4E4E4"} onClick={() => setSortBy('age_desc')} />
                )
            }
            
           
        </div>

    );
}

export default AppCardControls;
