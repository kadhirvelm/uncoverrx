/**
 * Copyright (c) 2023 - KM
 */

import * as React from "react";
import styles from "./UncoverRx.module.scss";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { ViewExploration } from "./exploration/ViewExploration";
import { SnackbarProvider } from "notistack";
import { AllExplorationsPath, ViewExplorationPath } from "../routes/allRoutes";
import { AllExplorations } from "./exploration/AllExplorations";

const router = createBrowserRouter([
    {
        path: AllExplorationsPath,
        element: <AllExplorations />,
    },
    {
        path: ViewExplorationPath,
        element: <ViewExploration />,
    },
    {
        path: "*",
        element: <Navigate replace to={AllExplorationsPath} />,
    },
]);

export const UncoverRx: React.FC<{}> = () => {
    return (
        <div className={styles.rootContainer}>
            <RouterProvider router={router} />
            <SnackbarProvider />
        </div>
    );
};
