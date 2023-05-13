import { IService, implementEndpoints } from "../../common/generics";
import { IQueryRequestInput } from "./types";
import { IExploration, IExplorationRid } from "./types";

export interface IExplorationService extends IService {
    createNewExploration: {
        payload: IExploration["metadata"];
        response: IExploration;
    };
    getExplorations: {
        payload: {
            explorationRids: IExplorationRid[];
        };
        response: IExploration[];
    };
    addNewRequest: {
        payload: {
            explorationRid: IExplorationRid,
            position: number,
            input: IQueryRequestInput;
        };
        response: IExploration;
    }
}

const { backend, frontend } = implementEndpoints<IExplorationService>({
    createNewExploration: {
        method: "post",
        slug: "/exploration/create-new-exploration",
    },
    getExplorations: {
        method: "post",
        slug: "/exploration/get-explorations",
    },
    addNewRequest: {
        method: "post",
        slug: "/exploration/add-new-request",
    },
});

export const ExplorationServiceBackend = backend;
export const ExplorationServiceFrontend = frontend;
