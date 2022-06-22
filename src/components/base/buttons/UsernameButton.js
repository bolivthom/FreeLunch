import * as React from "react";

function UsernameButton({ Title}) {
    return (
        <div className="header-content">
            <button id="user-name-button">
                <p className="button-title">{Title}</p>
            </button>
        </div>
    );
}

export default UsernameButton;