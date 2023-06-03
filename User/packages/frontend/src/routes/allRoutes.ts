/**
 * Copyright (c) 2023 - KM
 */
import { IBasicExploration, IExploration } from "@uncoverrx-user/api";

export const AllExplorationsPath = "exploration/all";

export const viewExploration = (exploration: IExploration | IBasicExploration) =>
    `/exploration/${exploration.exploration_rid}`;
export const ViewExplorationPath = "exploration/:explorationRid";
