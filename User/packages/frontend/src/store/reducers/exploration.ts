/**
 * Copyright (c) 2023 - KM
 */
import { IBasicExploration } from "@uncoverrx-user/api";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IExplorationState {
    allExplorations: IBasicExploration[] | undefined;
}

const initialState: IExplorationState = {
    allExplorations: undefined,
};

const exploration = createSlice({
    name: "exploration",
    initialState,
    reducers: {
        setExplorations: (state, action: PayloadAction<IBasicExploration[]>) => {
            state.allExplorations = action.payload;
        },
    },
});

export const ExplorationStateActions = exploration.actions;
export const ExplorationReducer = exploration.reducer;
