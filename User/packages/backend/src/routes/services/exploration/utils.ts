import { IExploration, IExplorationRid, IQueryRequest, IQueryRequestInput, IQueryRequestResult, IQueryRequestRid } from "@cohortrx-user/api";
import { Exploration, ExplorationXQueryRequest, QueryRequest } from "@prisma/client";
import { keyBy } from "lodash";

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
        input: queryRequest.input as unknown as IQueryRequestInput,
        result: queryRequest.result as unknown as IQueryRequestResult | undefined,
    } as IQueryRequest;
}

interface IIndexedCrossTableEntries {
    [exploration_rid: string]: { [query_request_rid: string]: number }
}

export function indexCrossTableEntries(crossTableEntries: ExplorationXQueryRequest[]): IIndexedCrossTableEntries {
    const indexedEntries: IIndexedCrossTableEntries = {};

    crossTableEntries.forEach((entry) => {
        indexedEntries[entry.exploration_rid] = indexedEntries[entry.exploration_rid] ?? {}

        indexedEntries[entry.exploration_rid][entry.query_request_rid] = parseFloat(entry.position);
    });

    return indexedEntries;
}

export function assembleExplorations(explorations: Exploration[], queryRequests: QueryRequest[], indexedCrossTableEntries: IIndexedCrossTableEntries): IExploration[] {
    const indexedQueryRequests = keyBy(queryRequests, (request) => request.query_request_rid);

    return explorations.map((exploration) => {
        const queryRequestsInExploration = indexedCrossTableEntries[exploration.exploration_rid]
        const queryRequests = Object.values(queryRequestsInExploration).map((queryRequest) => indexedQueryRequests[queryRequest]).sort((a, b) => queryRequestsInExploration[a.query_request_rid] > queryRequestsInExploration[b.query_request_rid] ? 1 : -1);

        return createExploration(exploration, queryRequests.map(createQueryRequest));
    })
}