import * as React from "react";

//Components
import Searchbar from "../base/inputs/Searchbar";
import AppSecondaryButton from "../base/buttons/AppSecondayButton";

function AppDeckListControls() {
    return (
        <div className="deck-sub-nav">
            <Searchbar />
            <AppSecondaryButton Title={"+"} BackgroundColor={"#FFFFFF"} />
        </div>

    );
}

export default AppDeckListControls;
