import * as React from "react";

function AppHeaderButton({ Title, BackgroundColor }) {
    return (
        <div className="header-content">
            <button id="app-header-button" style={{backgroundColor: BackgroundColor}}>
                <p className="button-title">{ Title }</p>
            </button>
        </div>
    );
}

export default AppHeaderButton;

