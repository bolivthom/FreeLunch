import * as React from "react";

//Components
import Searchbar from "../base/inputs/Searchbar";
import AppSecondaryButton from "../base/buttons/AppSecondayButton";
import AppPrimaryButton from "../base/buttons/AppPrimaryButton";

function AppCardControls({SortAToZ}) {

    return (
        <div class="sub-nav">
            <Searchbar />
            <AppSecondaryButton onClick={SortAToZ} Title={"A to Z"} BackgroundColor={"#FFFFFF"} />
            <AppPrimaryButton Title={"Youngest"} BackgroundColor={"#E4E4E4"} />
            <AppPrimaryButton Title={"Eldest"} BackgroundColor={"#E4E4E4"} />
        </div>
    );
}

export default AppCardControls;
