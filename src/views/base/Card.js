import * as React from "react";
import AppCardControls from "../../components/sections/AppCardListControls";
import CardTemplate from "../../components/base/cards/Card/CardTemplate";

function Card() {
    return (
        <div>
            <AppCardControls />
            <div className="card-grid">
                <CardTemplate/>
            </div>
        </div>
    );
}

export default Card;
