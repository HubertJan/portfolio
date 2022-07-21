import React, { ReactNode } from "react";
import { ReactElement } from "react";

export function addKeyToReactElement(reactElement: ReactElement , key: string): ReactElement {
    return React.cloneElement(reactElement, { key: key });
}
