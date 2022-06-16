
import React, { ReactElement, useRef } from "react";
import internal from "stream";
import styles from "./ScrollableFullScreenList.module.scss";


export const ScrollableSlideContainerList: React.FC<{ children?: React.ReactNode }>
    = ({ children,
    }) => {
        const containerRef = useRef<HTMLDivElement>(null);
        let wrapppedChildren = React.Children.map(children, child => (
            <div className={styles.slide}>{child}</div>
        ))
        if (wrapppedChildren === undefined || wrapppedChildren === null) {
            return null;
        }

        return (
            <div className={styles.container}>
                <div className={styles.scrollable}
                    ref={containerRef}>
                    {wrapppedChildren}
                </div>
                <div>
                    <button onClick={() => {
                        if (containerRef.current) {
                            console.log(containerRef.current.scrollLeft);
                            containerRef.current.scrollBy({
                                left: -100,
                                behavior: "smooth"
                            });
                        }
                    }}>
                        Click me
                    </button>
                    <button onClick={() => {
                        if (containerRef.current) {
                            console.log(containerRef.current.scrollLeft);
                            containerRef.current.scrollBy({
                                left: 100,
                                behavior: "smooth"
                            });
                        }
                    }}>
                        Click me
                    </button>
                </div>
            </div>);
    };

