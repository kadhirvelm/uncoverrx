/**
 * Copyright (c) 2023 - KM
 */
import { SearchOutlined } from "@mui/icons-material";
import {
    Button,
    Card,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useLoadExploration } from "../../hooks/loadExploration";
import { viewExploration } from "../../routes/allRoutes";
import { useUncoverRxSelector } from "../../store/createStore";
import { DynamicScrollContainer } from "../../utilityComponents/DynamicScrollContainer";
import { checkError } from "../../utils/checkError";
import styles from "./AllExplorations.module.scss";

const NewExplorationDialog: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const explorationService = useUncoverRxSelector((s) => s.services.explorationService);
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = React.useState(false);

    const [newExplorationName, setNewExplorationName] = React.useState<string>("");

    const updateExplorationName = (event: React.ChangeEvent<HTMLInputElement>) =>
        setNewExplorationName(event.currentTarget.value);

    const createExploration = async () => {
        setIsLoading(true);
        const newExploration = checkError(await explorationService.createNewExploration({ name: newExplorationName }));
        setIsLoading(false);

        if (newExploration === undefined) {
            return;
        }

        navigate(viewExploration(newExploration));
    };

    return (
        <Dialog onClose={onClose} open={isOpen}>
            <DialogTitle>New exploration details</DialogTitle>
            <DialogContent style={{ gap: "20px", display: "flex", flexDirection: "column" }}>
                <Typography>
                    Explore a specific target and/or mechanism within an exploration, useful for structuring your
                    thoughts.
                </Typography>
                <TextField
                    error={newExplorationName === ""}
                    fullWidth
                    label="Exploration title"
                    onChange={updateExplorationName}
                    required
                    value={newExplorationName}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    disabled={newExplorationName === "" || isLoading}
                    onClick={createExploration}
                    style={{ gap: "10px" }}
                    variant="contained"
                >
                    {isLoading && <CircularProgress size="20" />}
                    <div>Create exploration</div>
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export const AllExplorations: React.FC<{}> = () => {
    const [isNewExplorationOpen, setIsNewExplorationOpen] = React.useState(false);

    const { isLoading, allExplorations } = useLoadExploration();

    const openNewExploration = () => setIsNewExplorationOpen(true);
    const closeNewExploration = () => setIsNewExplorationOpen(false);

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
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchOutlined />
                                </InputAdornment>
                            ),
                        }}
                    />
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
                        <Button
                            onClick={openNewExploration}
                            variant={!isLoading && (allExplorations?.length ?? 0) === 0 ? "contained" : "text"}
                        >
                            New exploration
                        </Button>
                    </div>
                </div>
                <div className={styles.explorations}>{maybeRenderExplorations()}</div>
            </Card>
            <NewExplorationDialog isOpen={isNewExplorationOpen} onClose={closeNewExploration} />
        </div>
    );
};
