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

    const maybeGetHeight = () => {
        if (parentRef == null || !hasMounted) {
            return undefined;
        }

        return `${parentRef.current?.clientHeight}px`
    }

    return (
        <div
            className={styles.parentContainer}
            ref={parentRef}
            style={{ maxHeight: maybeGetHeight() }}
        >
            {maybeRenderChildren()}
        </div>
    );
};
