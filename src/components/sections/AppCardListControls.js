import * as React from "react";
import { Link } from "react-router-dom";

import { Row, Col } from 'react-bootstrap'
//Icons
import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

//Components
import Searchbar from "../base/inputs/Searchbar";
import AppSecondaryButton from "../base/buttons/AppSecondayButton";
import AppPrimaryButton from "../base/buttons/AppPrimaryButton";

const styles = {
    cardControls: {
        marginRight: '6px'
    }
}
function AppCardControls() {
    return (
        <div className="sub-nav">
            <Searchbar style={styles.cardControls}/>
            <AppSecondaryButton style={styles.cardControls} Title={"A-Z"} BackgroundColor={"#FFFFFF"} />
            <AppPrimaryButton style={styles.cardControls} Title={"Youngest"} BackgroundColor={"#E4E4E4"} />
            <AppPrimaryButton Title={"Eldest"} BackgroundColor={"#E4E4E4"} />
        </div>

    );
}

export default AppCardControls;
