import * as React from "react";

function AppHeaderButton({ Title, BackgroundColor, Icon }) {
    return (
        <div className="header-content">
            <button id="app-header-button" style={{backgroundColor: BackgroundColor}}>
                { Icon }
                <p className="button-title">{ Title }</p>
            </button>
        </div>
    );
}

export default AppHeaderButton;

