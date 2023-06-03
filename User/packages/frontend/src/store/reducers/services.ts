/**
 * Copyright (c) 2023 - KM
 */
import { createSlice } from "@reduxjs/toolkit";
import { EfficientExplorationService } from "../../services/efficientExplorationService";

interface IUncoverRxServices {
    explorationService: EfficientExplorationService;
}

const initialState: IUncoverRxServices = {
    explorationService: new EfficientExplorationService(),
};

const services = createSlice({
    name: "services",
    initialState,
    reducers: {},
});

export const ServicesReducer = services.reducer;
