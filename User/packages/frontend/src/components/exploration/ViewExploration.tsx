/**
 * Copyright (c) 2023 - KM
 */
import { Button } from "@mui/material";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AllExplorationsPath } from "../../routes/allRoutes";

export const ViewExploration: React.FC<{}> = () => {
    const navigate = useNavigate();

    const { explorationId } = useParams<{ explorationId: string }>();

    const goBackToExplorations = () => navigate(AllExplorationsPath);

    return (
        <div>
            View exploration! {explorationId} <Button onClick={goBackToExplorations}>See all explorations</Button>{" "}
        </div>
    );
};
