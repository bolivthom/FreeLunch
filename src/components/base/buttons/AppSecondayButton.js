import * as React from "react";

function AppSecondaryButton({ Title, BackgroundColor, onClick }) {
    return (
        <div className="header-content" onClick={onClick}>
            <button id="user-name-button" style={{backgroundColor: BackgroundColor}}>
                <p className="button-title">{Title}</p>
            </button>
        </div>
    );
}

export default AppSecondaryButton;