import * as React from "react";
import { routes } from "../../nav/routes";

//Buttons
import AppSecondaryButton from "../base/buttons/AppSecondayButton"
import AppPrimaryButton from "../base/buttons/AppPrimaryButton";

//Icons
import { ReactComponent as AllCardsIcon } from "../../assets/allcards.svg";
import { ReactComponent as DecksIcon } from "../../assets/decks.svg";

const styles = {
    appHeader: {
        paddingTop: '5%',
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
    },
    navHr: {
        background: '#B8B8B8',
        borderRadius: '2px',
        height: '2px',
        border: '0',
        boxShadow: 'none',
    }
}

function AppHeader() {
    return (
        <div style={styles.appHeader}>
            <div style={styles.headerContent} className="header-content">
                <div>
                    <div style={styles.leftMenuItems}>
                        <AppPrimaryButton Title={"All Cards"} BackgroundColor={"#FFFFFF"} Icon={<AllCardsIcon />} />
                        <AppPrimaryButton Title={"Decks"} BackgroundColor={"#E4E4E4"} Icon={<DecksIcon />} />
                    </div>
                </div>
                <div>
                    <h6 id="header-title">SW-API Deck Builder</h6>
                </div>
                <div>
                    <div><AppSecondaryButton Title={"Bavin Edwards"} BackgroundColor={"#EDEDED"}/></div>
                </div>
            </div>
            <hr style={styles.navHr}></hr>
        </div>
    );
}

export default AppHeader;