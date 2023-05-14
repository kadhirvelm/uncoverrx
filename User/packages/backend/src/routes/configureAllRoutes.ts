/**
 * Copyright (c) 2022 - KM
 */

import Express from "express";
import { configureFrontendRoutes } from "./configureFrontendRoutes";
import { ExplorationServiceBackend } from "@cohortrx-user/api";
import { addNewRequest, createNewExploration, getExplorations } from "./services/exploration/exploration";

export function configureAllRoutes(app: Express.Express) {
    app.get("/status", (_req, res) => {
        res.status(200).send({ message: "success" });
    });

    ExplorationServiceBackend(app, {
        createNewExploration,
        getExplorations,
        addNewRequest,
    });

    configureFrontendRoutes(app);
}
