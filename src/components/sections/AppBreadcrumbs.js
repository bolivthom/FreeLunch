import * as React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../nav/routes";

//Icons
import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

function AppBreadCrumbs({ ParentTitle, ParentTitleStyle, ChildTitle, ChildTitleStyle }) {
    return (
        <div className="breadcrumb">
            <p id="all-cards-nav" style={ParentTitleStyle} >{ParentTitle}</p>
            <ArrowRightIcon />
            <p id="select-card-nav" style={ChildTitleStyle}>{ChildTitle}</p>
        </div>
    );
}

export default AppBreadCrumbs;