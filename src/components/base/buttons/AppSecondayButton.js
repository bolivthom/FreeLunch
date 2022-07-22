import * as React from "react";

function AppSecondaryButton({ Title, BackgroundColor, onClick, style }) {
    return (
        <div style={style} className="header-content" onClick={onClick}>
            <button id="user-name-button" style={{backgroundColor: BackgroundColor}}>
                <p className="button-title">{Title}</p>
            </button>
        </div>
    );
}

export default AppSecondaryButton;