import * as React from "react";
import { useCohortRxSelector } from "../store/createStore";
import { IBasicExploration } from "@cohortrx-user/api";
import { checkError } from "../utils/checkError";

export function useLoadExploration() {
    const explorationService = useCohortRxSelector((s) => s.services.explorationService);

    const [isLoading, setIsLoading] = React.useState(false);
    const [allExplorations, setAllExplorations] = React.useState<IBasicExploration[] | undefined>(undefined);

    const loadAllExplorations = async () => {
        setIsLoading(true);
        const maybeAllExplorations = checkError(await explorationService.getAllExplorations({}));
        setIsLoading(false);

        if (maybeAllExplorations === undefined) {
            return;
        }

        setAllExplorations(maybeAllExplorations);
    };

    React.useEffect(() => {
        loadAllExplorations();
    }, []);

    return {
        isLoading,
        allExplorations,
    };
}
