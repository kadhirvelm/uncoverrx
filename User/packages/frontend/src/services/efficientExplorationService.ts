import {
    ExplorationServiceEndpoints,
    IBasicExploration,
    IEndpointError,
    IExploration,
    IExplorationRid,
    IExplorationService,
    LLMInput,
} from "@uncoverrx-user/api";
import { IFrontendEndpoint, implementFrontend } from "./utils/implementRoutes";

export class EfficientExplorationService implements IFrontendEndpoint<IExplorationService> {
    public getAllExplorations: (
        payload: {},
        cookie?: string | undefined,
    ) => Promise<IEndpointError | IBasicExploration[]>;

    public createNewExploration: (
        payload: { name: string },
        cookie?: string | undefined,
    ) => Promise<IEndpointError | IExploration>;

    public getExplorations: (
        payload: { explorationRids: IExplorationRid[] },
        cookie?: string | undefined,
    ) => Promise<IEndpointError | IExploration[]>;

    public addNewRequest: (
        payload: { explorationRid: IExplorationRid; position: number; input: LLMInput },
        cookie?: string | undefined,
    ) => Promise<IEndpointError | IExploration>;

    public constructor() {
        const delegate = implementFrontend<IExplorationService>(ExplorationServiceEndpoints);

        this.getAllExplorations = delegate.getAllExplorations;
        this.createNewExploration = delegate.createNewExploration;
        this.getExplorations = delegate.getExplorations;
        this.addNewRequest = delegate.addNewRequest;
    }

    [x: string]: (payload: any, cookie?: string | undefined) => Promise<any>;
}
