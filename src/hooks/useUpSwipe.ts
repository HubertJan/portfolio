import { useEffect, useRef, useState } from "react";
import { addDragListenersAndReturnRemover } from "src/helper/addDragListenersAndReturnRemover";
import { AppTouchEvent } from "src/helper/compatibility";
import { isMouseEvent } from "src/helper/isMouseEvent";

function getYPos(event: MouseEvent | AppTouchEvent) {
    const isMouse = isMouseEvent(event);
    return isMouse ? (event as MouseEvent).pageY : (event as AppTouchEvent).touches[0].clientY;
}

export function useUpSwipe({ onStop }:
    { onStop: (event: MouseEvent | AppTouchEvent, clickedMouseHeightInPercentage: number) => void }) {
    const element = useRef<HTMLDivElement>(null);
    const [clickedMouseHeightInPercentage, setClickedMouseHeightInPercentage] = useState<null | number>(null);
    useEffect(() => {
        return addDragListenersAndReturnRemover({
            element: element, onStartReturnOnMoveAndOnEnd: (event: MouseEvent | AppTouchEvent) => {
                const startPointY = getYPos(event);
                let currentPosY: number | undefined;
                return {
                    onMove: (e: MouseEvent | AppTouchEvent) => {
                        currentPosY = getYPos(e) / startPointY;
                        setClickedMouseHeightInPercentage(getYPos(e) / startPointY);
                    },
                    onStop: (e: MouseEvent | AppTouchEvent) => {
                        currentPosY = isMouseEvent(e)
                            ? getYPos(e) / startPointY :
                            currentPosY!;
                        setClickedMouseHeightInPercentage(null);
                        onStop(e, currentPosY);
                    },
                }
            },
            isDetectionMoveAndEndForWholeWindow: true,
        });

    }
        , []);
    return {
        clickedMouseHeightInPercentage: clickedMouseHeightInPercentage,
        ref: element,
    };
}