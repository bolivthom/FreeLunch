import React, { useState } from "react";
import { routes } from "../../nav/routes";
import { Link } from "react-router-dom";

//Buttons
import AppSecondaryButton from "../base/buttons/AppSecondayButton"
import AppPrimaryButton from "../base/buttons/AppPrimaryButton";

const styles = {
    appHeader: {
        paddingTop: '5%',
    },
    leftMenuItems: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row'
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navHr: {
        background: '#B8B8B8',
        borderRadius: '2px',
        height: '2px',
        border: '0',
        boxShadow: 'none',
    },
    link: {
        textDecoration: 'none',
    },
}

function AppHeader() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    function handleLinkItemClick(index) {
        setSelectedIndex(index);
    }


    return (
        <div style={styles.appHeader}>
            <div style={styles.headerContent} className="header-content">
                <div>
                    <div style={styles.leftMenuItems}>
                        {
                            routes.filter((route) => !route.path.includes(':')).map((route, index) => {
                                const Icon = route.icon;
                                const isActive = window.location.pathname === route.path || (route.root && window.location.pathname === '/');

                                return (
                                    <Link style={styles.link} key={index} to={route.path || '/'} onClick={() => handleLinkItemClick(index)}>
                                        <AppPrimaryButton Title={route.name} BackgroundColor={isActive ? "white" : "#EDEDED"} Icon={Icon}></AppPrimaryButton>
                                    </Link>)
                            })
                        }
                    </div>
                </div>
                <div>
                    <h6 id="header-title">SW-API Deck Builder</h6>
                </div>
                <div>
                    <div><AppSecondaryButton  style={{borderRadius: '4px', border: '1px solid #B8B8B8'}} Title={"Bavin Edwards"} BackgroundColor={"#EDEDED"} /></div>
                </div>
            </div>
            <hr style={styles.navHr}></hr>
        </div>
    );
}

export default AppHeader;