import React, { useEffect, useState } from "react";
import Hook from "../../../../hooks/api/index"
//Icons
//import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

function AllCardsTemplate() {
    return (
        <div class="grid">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-name" id="blah">Name</h3>
                </div>
                <div class="card-content">
                    <div class="content-header">
                        <div class="card-icon-group-header">
                            <p>19BBY</p>
                        </div>
                    </div>
                    <hr id="card-hr" />
                    <div class="card-content-row">
                        <div class="card-icon-group">
                            <p class="card-text">HOMEWORLD</p>
                        </div>
                    </div>
                    <div class="card-content-row">
                        <div class="card-icon-group">
                            <p class="card-text">VEHICLES</p>
                        </div>
                    </div>
                    <div class="card-content-row">
                        <div class="card-icon-group">
                            <p class="card-text">STARSHIP</p>
                        </div>
                    </div>
                </div>
            </div>`
        </div>
    );
}

export default AllCardsTemplate;