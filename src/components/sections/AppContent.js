import * as React from "react";
import { Navigate, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { getCurrentRoute } from "../../nav/utils";
//routes
import { routes } from "../../nav/routes";

//Icons
import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

//Components
function AppContent() {
    const currentLocation = useLocation().pathname;
    const params = useParams();
    const currentRoute = getCurrentRoute(currentLocation, routes, params);
    return (
        <div>
            {
                routes.map((route, index) => {
                    const ActiveRoute = currentRoute?.name === route.name;
                    return (
                        <div key={index}>
                            {ActiveRoute && route.component}
                        </div>
                    )
                })
            }
        </div>

    );
}

export default AppContent;
