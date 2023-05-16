/**
 * Copyright (c) 2022 - KM
 */

import { CohortRx } from "./components/CohortRx";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Store } from "./store/createStore";
import * as React from "react";
import "./index.scss";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = createRoot(document.getElementById("root")!);
root.render(
    <Provider store={Store}>
        <CohortRx />
    </Provider>,
);
