/**
 * Copyright (c) 2023 - KM
 */
import {
    ExplorationServiceEndpoints,
    IBasicExploration,
    IEndpointError,
    IExploration,
    IExplorationRid,
    IExplorationService,
    IService,
    LLMInput,
} from "@uncoverrx-user/api";
import { IFrontendEndpoint, implementFrontend } from "./utils/implementRoutes";

// Not really sure why the extension is getting lost across the package boundary
interface IForceType extends IExplorationService, IService {}

export class EfficientExplorationService implements IFrontendEndpoint<IForceType> {
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
        const delegate = implementFrontend<IForceType>(ExplorationServiceEndpoints);

        this.getAllExplorations = delegate.getAllExplorations;
        this.createNewExploration = delegate.createNewExploration;
        this.getExplorations = delegate.getExplorations;
        this.addNewRequest = delegate.addNewRequest;
    }

    [x: string]: (payload: any, cookie?: string | undefined) => Promise<any>;
}
