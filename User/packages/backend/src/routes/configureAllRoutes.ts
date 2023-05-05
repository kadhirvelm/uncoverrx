/**
 * Copyright (c) 2022 - KM
 */

import Express from "express";
import { configureFrontendRoutes } from "./configureFrontendRoutes";

export function configureAllRoutes(app: Express.Express) {
    app.get("/status", (_req, res) => {
        res.status(200).send({ message: "success" });
    });

    configureFrontendRoutes(app);
}
