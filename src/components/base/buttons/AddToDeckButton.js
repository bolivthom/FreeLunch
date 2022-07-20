import * as React from "react";

function AddToDeckButton({ BackgroundColor, Icon }) {
    return (
        <div className="header-content">
            <button id="add-to-deck-button" style={{ backgroundColor: BackgroundColor }}>
               { Icon }
            </button>
        </div>
    );
}

export default AddToDeckButton;