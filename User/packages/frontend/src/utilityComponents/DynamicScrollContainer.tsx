/**
 * Copyright (c) 2023 - KM
 */

import React from "react";
import styles from "./DynamicScrollContainer.module.scss";

export const DynamicScrollContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [hasMounted, setHasMounted] = React.useState(false);
    const parentRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    const maybeRenderChildren = () => {
        if (!hasMounted) {
            return undefined;
        }

        return <div className={styles.childContainer}>{children}</div>;
    };

    return (
        <div
            className={styles.parentContainer}
            ref={parentRef}
            style={{ maxHeight: `${parentRef.current?.clientHeight ?? 0}px` }}
        >
            {maybeRenderChildren()}
        </div>
    );
};
