import { IImplementEndpoint, IService } from "common/generics.js";
import { LLMInput } from "constants/generatedConstants.js";
import { IBasicExploration, IExploration, IExplorationRid } from "./types.js";

export interface IExplorationService extends IService {
    getAllExplorations: {
        payload: {};
        response: IBasicExploration[];
    };
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
            explorationRid: IExplorationRid;
            position: number;
            input: LLMInput;
        };
        response: IExploration;
    };
}

export const ExplorationServiceEndpoints: IImplementEndpoint<IExplorationService> = {
    getAllExplorations: {
        method: "post",
        slug: "/exploration/get-all-exploration",
    },
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
};
