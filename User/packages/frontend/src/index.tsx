/**
 * Copyright (c) 2022 - KM
 */

import { CohortRx } from "./components/CohortRx";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Store } from "./store/createStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import "./index.scss";

const router = createBrowserRouter([
    {
        path: "*",
        element: <CohortRx />,
    },
]);

const root = createRoot(document.getElementById("root")!);
root.render(
    <Provider store={Store}>
        <RouterProvider router={router} />
    </Provider>,
);
