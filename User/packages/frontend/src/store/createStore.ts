/**
 * Copyright (c) 2022 - KM
 */

import { configureStore, AnyAction, Dispatch as D, MiddlewareAPI, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export interface IStore {}

const LoggingMiddleware = <Reducers>() => [
    (store: MiddlewareAPI<ThunkDispatch<Reducers, null, AnyAction>, Reducers>) =>
        (next: D<AnyAction>) =>
        (action: any) => {
            if (process.env.NODE_ENV === "production") {
                return next(action);
            }

            const result = next(action);
            // eslint-disable-next-line no-console
            console.log(`%c ${action.type}`, "color: #cacfd2", {
                action,
                nextState: store.getState(),
            });

            return result;
        },
];

export const Store = configureStore({
    reducer: {},
    middleware: LoggingMiddleware,
});

export type State = ReturnType<typeof Store.getState>;
export type Dispatch = typeof Store.dispatch;

export const usePoliticalCapitalDispatch: () => Dispatch = useDispatch;
export const usePoliticalCapitalSelector: TypedUseSelectorHook<State> = useSelector;
