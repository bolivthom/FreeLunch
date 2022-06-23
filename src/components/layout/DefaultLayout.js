import React, { useState } from "react";
import AppHeader from "../sections/AppHeader";
import AppBreadCrumbs from "../sections/AppBreadcrumbs";
import AppCardControls from "../sections/AppCardListControls";
import AppContent from "../sections/AppContent";

const styles = {
    body: {
        paddingRight: '10%',
        paddingLeft: '10%',
    }

}
function DefaultLayout() {
    return (
        <div style={styles.body}>
            <AppHeader />
            <AppBreadCrumbs
                ParentTitle={"All Cards"}
                ParentTitleStyle={{ color: '#757575', marginRight: '8px', fontSize: '14px' }}
                ChildTitle={"Select a card"}
                ChildTitleStyle={{ marginLeft: '8px', fontSize: '14px' }} />
            <AppContent/>
        </div>
    );
}

export default DefaultLayout;