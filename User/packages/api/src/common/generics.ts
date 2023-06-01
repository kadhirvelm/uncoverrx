/**
 * Copyright (c) 2022 - KM
 */

export type IMethods = "get" | "post" | "put" | "delete";

export interface IEndpoint<Payload, Response> {
    payload: Payload;
    response: Response;
}

export type IService = Record<string, IEndpoint<any, any>>;

export type IImplementEndpoint<Service extends IService> = {
    [Key in keyof Service]: {
        method: IMethods;
        slug: string;
    };
};

export interface IEndpointError {
    message: string;
    details: any;
    type: "error";
}

export const isEndpointError = <T>(maybeError: T | IEndpointError): maybeError is IEndpointError => {
    return (maybeError as IEndpointError)?.type === "error";
};
