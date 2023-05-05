/**
 * Copyright (c) 2022 - KM
 */

import Express from "express";
import { join } from "path";

export function configureFrontendRoutes(app: Express.Express) {
    if (process.env.NODE_ENV === "production") {
        app.use(Express.static(join(process.cwd(), "packages/frontend/build"), { extensions: ["html"] }));
        app.use(Express.static(join(process.cwd(), "packages/frontend/public")));
        app.use(Express.static(join(process.cwd(), "packages/frontend/static")));

        app.get("*", (_, res) => {
            res.sendFile(join(process.cwd(), "packages/frontend/build/index.html"));
        });
    } else {
        app.use(Express.static(join(process.cwd(), "../frontend/build"), { extensions: ["html"] }));
        app.use(Express.static(join(process.cwd(), "../frontend/public")));
        app.use(Express.static(join(process.cwd(), "../frontend/static")));

        app.get("*", (_, res) => {
            res.sendFile(join(process.cwd(), "../frontend/build/index.html"));
        });
    }
}
