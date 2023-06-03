/**
 * Copyright (c) 2023 - KM
 */
import {
    IExploration,
    IExplorationRid,
    IQueryRequest,
    IQueryRequestRid,
    LLMInput,
    LLMResult,
} from "@uncoverrx-user/api";
import { Exploration, ExplorationXQueryRequest, QueryRequest } from "@uncoverrx-user/prisma-client";
import _ from "lodash";

export function createExploration(exploration: Exploration, queryRequests: IQueryRequest[]): IExploration {
    return {
        ...exploration,
        exploration_rid: exploration.exploration_rid as IExplorationRid,
        queryRequests: queryRequests,
    } as IExploration;
}

export function createQueryRequest(queryRequest: QueryRequest): IQueryRequest {
    return {
        ...queryRequest,
        query_request_rid: queryRequest.query_request_rid as IQueryRequestRid,
        input: queryRequest.input as unknown as LLMInput,
        result: queryRequest.result as unknown as LLMResult | undefined,
    } as IQueryRequest;
}

interface IIndexedCrossTableEntries {
    [exploration_rid: string]: { [query_request_rid: string]: number };
}

export function indexCrossTableEntries(crossTableEntries: ExplorationXQueryRequest[]): IIndexedCrossTableEntries {
    const indexedEntries: IIndexedCrossTableEntries = {};

    crossTableEntries.forEach((entry) => {
        indexedEntries[entry.exploration_rid] = indexedEntries[entry.exploration_rid] ?? {};

        indexedEntries[entry.exploration_rid][entry.query_request_rid] = parseFloat(entry.position);
    });

    return indexedEntries;
}

export function assembleExplorations(
    explorations: Exploration[],
    queryRequests: QueryRequest[],
    indexedCrossTableEntries: IIndexedCrossTableEntries,
): IExploration[] {
    const indexedQueryRequests = _.keyBy(queryRequests, (request) => request.query_request_rid);

    return explorations.map((exploration) => {
        const queryRequestsInExploration = indexedCrossTableEntries[exploration.exploration_rid];
        const sortedQueryRequests = Object.values(queryRequestsInExploration)
            .map((queryRequest) => indexedQueryRequests[queryRequest])
            .sort((a, b) =>
                queryRequestsInExploration[a.query_request_rid] > queryRequestsInExploration[b.query_request_rid]
                    ? 1
                    : -1,
            );

        return createExploration(exploration, sortedQueryRequests.map(createQueryRequest));
    });
}
