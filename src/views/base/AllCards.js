import * as React from "react";
import AppCardControls from "../../components/sections/AppCardListControls";
import AllCardsTemplate from "../../components/base/cards/AllCards/AllCardsTemplate";

function AllCards() {
    return (
        <div>
            <AppCardControls />
            <AllCardsTemplate/>
        </div>
    );
}

export default AllCards;
