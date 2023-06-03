/**
 * Copyright (c) 2023 - KM
 */
import * as React from "react";
import { useLoadExploration } from "../../hooks/loadExploration";
import { Button, Card, CircularProgress, Input } from "@mui/material";
import styles from "./AllExplorations.module.scss";
import { DynamicScrollContainer } from "../../utilityComponents/DynamicScrollContainer";

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
            return <div className={styles.noExplorationsFound}>No explorations found.</div>;
        }

        return (
            <DynamicScrollContainer>
                <div>
                    <Input />
                </div>
                <div>
                    {allExplorations.map((exploration) => (
                        <div key={exploration.exploration_rid}>{exploration.metadata.name}</div>
                    ))}
                </div>
            </DynamicScrollContainer>
        );
    };

    return (
        <div className={styles.mainBody}>
            <Card className={styles.cardContainer}>
                <div className={styles.cardHeader}>
                    <div className={styles.loaderContainer}>
                        <div>All explorations</div>
                        {maybeRenderLoading()}
                    </div>
                    <div>
                        <Button>New exploration</Button>
                    </div>
                </div>
                {maybeRenderExplorations()}
            </Card>
        </div>
    );
};
