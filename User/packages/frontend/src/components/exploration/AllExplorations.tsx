import * as React from "react";
import { useLoadExploration } from "../../hooks/loadExploration";
import { CircularProgress } from "@mui/material";

export const AllExplorations: React.FC<{}> = () => {
    const { isLoading, allExplorations } = useLoadExploration();

    return (
        <div>
            {isLoading ? <CircularProgress /> : undefined}
            <div>{allExplorations?.length ?? 0} explorations found</div>
        </div>
    );
};
