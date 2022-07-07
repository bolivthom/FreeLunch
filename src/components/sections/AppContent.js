import * as React from "react";
import { useParams } from 'react-router-dom'
import { getCurrentRoute } from "../../nav/utils";
//routes
import { routes } from "../../nav/routes";

//Icons
import { ReactComponent as ArrowRightIcon } from "../../assets/arrowright.svg";

//Components
function AppContent() {
    const params = useParams();
    return (
        <div>
            {
                routes.map((route, index) => {
                    const Component = route.component
                    const ActiveRoute = !getCurrentRoute(route.path, routes, params)?.path;

                    return (
                        <div>
                            {ActiveRoute && Component}
                        </div>
                    )
                })
            }
        </div>

    );
}

export default AppContent;
