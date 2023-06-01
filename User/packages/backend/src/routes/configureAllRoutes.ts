/**
 * Copyright (c) 2022 - KM
 */

import Express from "express";
import { configureFrontendRoutes } from "./configureFrontendRoutes";
import { ExplorationServiceBackend } from "./services/exploration/exploration";

export function configureAllRoutes(app: Express.Express) {
    app.get("/status", (_req, res) => {
        res.status(200).send({ message: "success" });
    });

    ExplorationServiceBackend(app);

    configureFrontendRoutes(app);
}
