/**
 * Copyright (c) 2023 - KM
 */
import * as React from "react";
import { useLoadExploration } from "../../hooks/loadExploration";
import { Card, CircularProgress, Input } from "@mui/material";

export const AllExplorations: React.FC<{}> = () => {
    const { isLoading, allExplorations } = useLoadExploration();

    const maybeRenderLoading = () => {
        if (!isLoading) {
            return undefined;
        }

        return (
            <div>
                <CircularProgress size="20" />
            </div>
        );
    };

    const maybeRenderExplorations = () => {
        if (allExplorations === undefined || allExplorations.length === 0) {
            return <div>No explorations found.</div>;
        }

        return (
            <div>
                <div>
                    <Input />
                </div>
                <div>
                    {allExplorations.map((exploration) => (
                        <div key={exploration.exploration_rid}>{exploration.metadata.name}</div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div>
            <Card>
                <div>
                    <div>All explorations</div>
                    {maybeRenderLoading()}
                </div>
                {maybeRenderExplorations()}
            </Card>
        </div>
    );
};
