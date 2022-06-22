import * as React from "react";
import { routes } from "../../nav/routes";

//Buttons
import UsernameButton from "../base/buttons/UsernameButton"
import AppHeaderButton from "../base/buttons/AppHeaderButton";

//Icons
import { ReactComponent as AllCardsIcon } from "../../assets/allcards.svg";
import { ReactComponent as DecksIcon } from "../../assets/decks.svg";

const styles = {
    appHeader: {
        paddingRight: '10%',
        paddingLeft: '10%',
        paddingTop: '5%'
    },
    leftMenuItems: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row'
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}

function AppHeader() {
    return (
        <div style={styles.appHeader}>
            <div style={styles.headerContent} className="header-content">
                <div>
                    <div style={styles.leftMenuItems}>
                        <AppHeaderButton Title={"All Cards"} BackgroundColor={"#FFFFFF"} Icon={<AllCardsIcon/>}/>
                        <AppHeaderButton Title={"Decks"} BackgroundColor={"#E4E4E4"} Icon={<DecksIcon/>}/>
                    </div>
                </div>
                <div>
                    <h6 id="header-title">SW-API Deck Builder</h6>
                </div>
                <div>
                    <div><UsernameButton Title={"Bavin Edwards"} /></div>
                </div>
            </div>
            <hr id="nav-hr"></hr>
        </div>
    );
}

export default AppHeader;