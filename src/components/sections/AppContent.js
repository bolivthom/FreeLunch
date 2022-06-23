import * as React from "react";
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

//routes
import { routes } from "../../nav/routes";

//Icons
import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

//Components
function AppContent() {
    return (
        <div>
            {
                routes.map((route, index) => {
                    const Component = route.component
                    const isActive = window.location.pathname === route.path;

                    return (
                        <div>
                            {Component}
                        </div>
                    )
                })
            }
        </div>

    );
}

export default AppContent;
