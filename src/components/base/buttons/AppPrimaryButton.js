import * as React from "react";

function AppPrimaryButton({ Title, BackgroundColor, Icon, style }) {
    return (
        <div style={style} className="header-content">
            <button id="app-header-button" style={{backgroundColor: BackgroundColor}}>
                <div className="button-image">{ Icon }</div>
                <p className="button-title">{ Title }</p>
            </button>
        </div>
    );
}

export default AppPrimaryButton;

