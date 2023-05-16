import * as React from "react";
import { useParams } from "react-router-dom";

export const ViewExploration: React.FC<{}> = () => {
    const { explorationId } = useParams<{ explorationId: string }>();

    return <div>View exploration! {explorationId} </div>;
};
