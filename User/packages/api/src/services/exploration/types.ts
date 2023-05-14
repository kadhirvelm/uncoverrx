import { Exploration, QueryRequest } from "@prisma/client";
import { LLMInput, LLMResult } from "../../constants/generatedConstants";

export type IQueryRequestRid = string & { _brand: "query-request-rid" };

export interface IQueryRequest extends Omit<QueryRequest, "input" | "result"> {
    query_request_rid: IQueryRequestRid;
    input: LLMInput;
    result?: LLMResult;
}

export type IExplorationRid = string & { _brand: "exploration-rid" };

export interface IExploration extends Omit<Exploration, "metadata"> {
    exploration_rid: IExplorationRid;
    metadata: {
        name: string;
    };
    queryRequests: IQueryRequest[];
}