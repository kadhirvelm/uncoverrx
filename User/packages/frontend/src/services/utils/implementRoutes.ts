/**
 * Copyright (c) 2023 - KM
 */

import { getBackendUrlFromFrontend, IEndpointError, IImplementEndpoint, IService } from "@uncoverrx-user/api";

export type IFrontendEndpoint<Service extends IService> = {
    [Key in keyof Service]: (
        payload: Service[Key]["payload"],
        cookie?: string,
    ) => Promise<Service[Key]["response"] | IEndpointError>;
};

function maybeRemoveVariableFromSlug(slug: string) {
    const allParts = slug.split("/");
    if (!allParts.slice(-1)[0].startsWith(":")) {
        return slug;
    }

    return allParts.slice(0, -1).join("/");
}

export function implementFrontend<Service extends IService>(
    endpoints: IImplementEndpoint<Service>,
): IFrontendEndpoint<Service> {
    const endpointsWithRestRequest: IFrontendEndpoint<Service> = {} as any;

    Object.keys(endpoints).forEach((endpointKey: keyof Service) => {
        const { method, slug } = endpoints[endpointKey];
        endpointsWithRestRequest[endpointKey] = async (payload: any, cookie?: string) => {
            let rawResponse: globalThis.Response;

            const headers =
                cookie == null
                    ? // eslint-disable-next-line @typescript-eslint/naming-convention
                      { "Content-Type": "application/json", Authorization: "N/A" }
                    : // eslint-disable-next-line @typescript-eslint/naming-convention
                      { "Content-Type": "application/json", Authorization: cookie };

            const hostname = getBackendUrlFromFrontend();

            if (method === "get") {
                const stringPayload: string = typeof payload === "string" ? `/${payload}` : "";

                rawResponse = await fetch(`${hostname}/api${maybeRemoveVariableFromSlug(slug)}${stringPayload}`, {
                    headers,
                    method,
                });
            } else {
                rawResponse = await fetch(`${hostname}/api${slug}`, {
                    headers,
                    body: JSON.stringify(payload),
                    method: method.toUpperCase(),
                });
            }

            return (await rawResponse.json()) as Response;
        };
    });

    return endpointsWithRestRequest;
}
