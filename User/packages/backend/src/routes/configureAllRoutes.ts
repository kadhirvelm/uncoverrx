/**
 * Copyright (c) 2023 - KM
 */

import Express from "express";
import { configureFrontendRoutes } from "./configureFrontendRoutes.js";
import { ExplorationServiceBackend } from "./services/exploration/exploration.js";

export function configureAllRoutes(app: Express.Express) {
    app.get("/status", (_req, res) => {
        res.status(200).send({ message: "success" });
    });

    ExplorationServiceBackend(app);

    configureFrontendRoutes(app);
}
