import * as React from "react";
import { routes } from "../../nav/routes";

//Buttons
import UsernameButton from "../base/buttons/UsernameButton"
import AppHeaderButton from "../base/buttons/AppHeaderButton";

//Icons
//import { ReactComponent as AllCardsIcon } from "../../assets/allcards.svg";
//import { ReactComponent as DecksIcon } from "../../assets/decks.svg";

function AppHeader() {

    return (
        <div className="header-content">
            <div className="header-button-group">
                <AppHeaderButton Title={"All Cards"} BackgroundColor={"#FFFFFF"}/>
                <AppHeaderButton Title={"Decks"} BackgroundColor={"#E4E4E4"}/>
                <h6 id="header-title">SW-API Deck Builder</h6>
                <UsernameButton Title={"Bavin Edwards"} />
            </div>
        </div>
    );
}

export default AppHeader;