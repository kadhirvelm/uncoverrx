/**
 * Copyright (c) 2022 - KM
 */

import { IEndpointError, IImplementEndpoint, isEndpointError, IService } from "@cohortrx-user/api";
import Express from "express";

export type IBackendEndpoint<Service extends IService> = {
    [Key in keyof Service]: (
        payload: Service[Key]["payload"],
        response: Express.Response,
    ) => Promise<Service[Key]["response"] | IEndpointError>;
};

export function implementBackend<Service extends IService>(
    endpoints: IImplementEndpoint<Service>,
    backendImplementedEndpoints: IBackendEndpoint<Service>,
) {
    return (app: Express.Express) => {
        Object.entries(endpoints).forEach((endpoint) => {
            const [key, { method, slug }] = endpoint;
            app[method](`/api${slug}`, async (request, response) => {
                try {
                    const payload = method === "get" ? Object.values(request.params)[0] : request.body;

                    const responseData = await backendImplementedEndpoints[key](payload, response);
                    if (responseData === undefined) {
                        return;
                    }

                    if (isEndpointError(responseData)) {
                        response.status(400).send(JSON.stringify(responseData));
                    }

                    response.status(200).send(JSON.stringify(responseData));
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.error(e);
                    response.status(500).send({ error: JSON.stringify(e) });
                }
            });
        });
    };
}
