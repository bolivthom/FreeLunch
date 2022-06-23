import * as React from "react";

function AppSecondaryButton({ Title, BackgroundColor,}) {
    return (
        <div className="header-content">
            <button id="user-name-button" style={{backgroundColor: BackgroundColor}}>
                <p className="button-title">{Title}</p>
            </button>
        </div>
    );
}

export default AppSecondaryButton;