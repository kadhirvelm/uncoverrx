/**
 * Copyright (c) 2023 - KM
 */

import { UncoverRx } from "./components/UncoverRx";
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
        <UncoverRx />
    </Provider>,
);
