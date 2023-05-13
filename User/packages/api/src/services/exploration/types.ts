import { Exploration, QueryRequest } from "@prisma/client";

export type IQueryRequestRid = string & { _brand: "query-request-rid" };

export interface IQueryRequestInput {
    message: string;
    intent: string;
}

export interface IQueryRequestResult {
    message: string;
    rawResult: any;
}

export interface IQueryRequest extends Omit<QueryRequest, "input" | "result"> {
    query_request_rid: IQueryRequestRid;
    input: IQueryRequestInput;
    result?: IQueryRequestResult;
}

export type IExplorationRid = string & { _brand: "exploration-rid" };

export interface IExploration extends Omit<Exploration, "metadata"> {
    exploration_rid: IExplorationRid;
    metadata: {
        name: string;
    };
    queryRequests: IQueryRequest[];
}