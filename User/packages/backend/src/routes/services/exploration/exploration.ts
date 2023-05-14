import { IExplorationRid, IExplorationService } from "@cohortrx-user/api";
import { CohortRxDatabase } from "../../../database/client";
import { v4 } from "uuid";
import { assembleExplorations, createExploration, indexCrossTableEntries } from "./utils";
import { CoordinatorClient } from "../../../coordinator/coordinatorClient";

export async function createNewExploration(payload: IExplorationService["createNewExploration"]["payload"]): Promise<IExplorationService["createNewExploration"]["response"]> {
    const newExploration = await CohortRxDatabase.exploration.create({
        data: {
            exploration_rid: v4(),
            metadata: {
                name: payload.name,
            }
        }
    });

    return createExploration(newExploration, []);
}

export async function getExplorations(payload: IExplorationService["getExplorations"]["payload"]): Promise<IExplorationService["getExplorations"]["response"]> {
    const allExplorations = await CohortRxDatabase.exploration.findMany({
        where: {
            exploration_rid: {
                in: payload.explorationRids,
            },
        }
    });

    const crossTableEntries = await CohortRxDatabase.explorationXQueryRequest.findMany({
        where: {
            exploration_rid: {
                in: allExplorations.map((exploration) => exploration.exploration_rid),
            },
        }
    });

    const allQueryRequests = await CohortRxDatabase.queryRequest.findMany({
        where: {
            query_request_rid: {
                in: crossTableEntries.map((entry) => entry.query_request_rid)
            }
        }
    });

    const indexedCrossTableEntries = indexCrossTableEntries(crossTableEntries);
    return assembleExplorations(allExplorations, allQueryRequests, indexedCrossTableEntries);
}

export async function addNewRequest(payload: IExplorationService["addNewRequest"]["payload"]): Promise<IExplorationService["addNewRequest"]["response"]> {
    const query_request_rid = v4();

    await Promise.all([
        // TODO: find a way to coordinate the "status" value with the python library
        CohortRxDatabase.queryRequest.create({ data: { query_request_rid, status: "pending", input: payload.input as any, request_date: new Date() } }),
        CohortRxDatabase.explorationXQueryRequest.create({ data: { position: payload.position.toString(), exploration_rid: payload.explorationRid, query_request_rid, } }),
    ]);

    await CoordinatorClient("/api/query/request_exploration_text", { body: { query_request_rid } });

    return (await getExplorations({ explorationRids: [payload.explorationRid] }))[0];
}
