import { ExplorationServiceFrontend } from "@cohortrx-user/api";
import { createSlice } from "@reduxjs/toolkit";
import { EfficientExplorationService } from "../../services/efficientExplorationService";

interface ICohortRxServices {
    explorationService: EfficientExplorationService;
}

const initialState: ICohortRxServices = {
    explorationService: new EfficientExplorationService(ExplorationServiceFrontend),
};

const services = createSlice({
    name: "services",
    initialState,
    reducers: {},
});

export const ServicesReducer = services.reducer;
