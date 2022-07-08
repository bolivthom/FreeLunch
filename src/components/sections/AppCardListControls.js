import * as React from "react";
import { Link } from "react-router-dom";

//Icons
import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

//Components
import Searchbar from "../base/inputs/Searchbar";
import AppSecondaryButton from "../base/buttons/AppSecondayButton";
import AppPrimaryButton from "../base/buttons/AppPrimaryButton";

function AppCardControls() {
    return (
        <div className="sub-nav">
            <Searchbar />
            <AppSecondaryButton Title={"A-Z"} BackgroundColor={"#FFFFFF"} />
            <AppPrimaryButton Title={"Youngest"} BackgroundColor={"#E4E4E4"} />
            <AppPrimaryButton Title={"Eldest"} BackgroundColor={"#E4E4E4"} />
        </div>

    );
}

export default AppCardControls;
