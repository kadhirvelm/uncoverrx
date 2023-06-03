import { Status, IExplorationService, ExplorationServiceEndpoints } from "@uncoverrx-user/api";
import { UncoverRxDatabase } from "database/client.js";
import { v4 } from "uuid";
import { assembleExplorations, createExploration, indexCrossTableEntries } from "./utils.js";
import { CoordinatorClient } from "coordinator/coordinatorClient.js";
import { implementBackend } from "routes/utils/implementRoutes.js";

export async function getAllExplorations(
    _payload: IExplorationService["getAllExplorations"]["payload"],
): Promise<IExplorationService["getAllExplorations"]["response"]> {
    const allExplorations = await UncoverRxDatabase.exploration.findMany({});

    return allExplorations.map((exploration) => createExploration(exploration, []));
}

export async function createNewExploration(
    payload: IExplorationService["createNewExploration"]["payload"],
): Promise<IExplorationService["createNewExploration"]["response"]> {
    const newExploration = await UncoverRxDatabase.exploration.create({
        data: {
            exploration_rid: v4(),
            metadata: {
                name: payload.name,
            },
        },
    });

    return createExploration(newExploration, []);
}

export async function getExplorations(
    payload: IExplorationService["getExplorations"]["payload"],
): Promise<IExplorationService["getExplorations"]["response"]> {
    const allExplorations = await UncoverRxDatabase.exploration.findMany({
        where: {
            exploration_rid: {
                in: payload.explorationRids,
            },
        },
    });

    const crossTableEntries = await UncoverRxDatabase.explorationXQueryRequest.findMany({
        where: {
            exploration_rid: {
                in: allExplorations.map((exploration) => exploration.exploration_rid),
            },
        },
    });

    const allQueryRequests = await UncoverRxDatabase.queryRequest.findMany({
        where: {
            query_request_rid: {
                in: crossTableEntries.map((entry) => entry.query_request_rid),
            },
        },
    });

    const indexedCrossTableEntries = indexCrossTableEntries(crossTableEntries);
    return assembleExplorations(allExplorations, allQueryRequests, indexedCrossTableEntries);
}

export async function addNewRequest(
    payload: IExplorationService["addNewRequest"]["payload"],
): Promise<IExplorationService["addNewRequest"]["response"]> {
    const query_request_rid = v4();

    await Promise.all([
        // TODO: find a way to coordinate the "status" value with the python library
        UncoverRxDatabase.queryRequest.create({
            data: {
                query_request_rid,
                status: Status.Pending.toString(),
                input: payload.input as any,
                request_date: new Date(),
            },
        }),
        UncoverRxDatabase.explorationXQueryRequest.create({
            data: { position: payload.position.toString(), exploration_rid: payload.explorationRid, query_request_rid },
        }),
    ]);

    await CoordinatorClient("/api/query/request_exploration_text", { body: { query_request_rid } });

    return (await getExplorations({ explorationRids: [payload.explorationRid] }))[0];
}

export const ExplorationServiceBackend = implementBackend(ExplorationServiceEndpoints, {
    getAllExplorations,
    createNewExploration,
    getExplorations,
    addNewRequest,
});
