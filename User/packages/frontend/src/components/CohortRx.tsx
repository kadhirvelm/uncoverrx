/**
 * Copyright (c) 2022 - KM
 */

import * as React from "react";
import styles from "./CohortRx.module.scss";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { ViewExploration } from "./exploration/ViewExploration";
import { AllExplorations } from "./exploration/AllExplorations";
import { SnackbarProvider } from "notistack";

const router = createBrowserRouter([
    {
        path: "exploration/all",
        element: <AllExplorations />,
    },
    {
        path: "exploration/:explorationRid",
        element: <ViewExploration />,
    },
    {
        path: "*",
        element: <Navigate to="/exploration/all" replace={true} />,
    },
]);

export const CohortRx: React.FC<{}> = () => {
    return (
        <div className={styles.rootContainer}>
            <RouterProvider router={router} />
            <SnackbarProvider />
        </div>
    );
};
