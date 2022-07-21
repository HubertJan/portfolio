import { useEffect, useRef, useState } from "react";
import { addDragListenersAndReturnRemover } from "src/helper/addDragListenersAndReturnRemover";
import { isMouseEvent } from "src/helper/isMouseEvent";

function getYPos(event: MouseEvent | TouchEvent) {
    const isMouse = isMouseEvent(event);
    return isMouse ? (event as MouseEvent).pageY : (event as TouchEvent).touches[0].clientY;
}

export function useUpSwipe({ onStop }:
    { onStop: (event: MouseEvent | TouchEvent, clickedMouseHeightInPercentage: number) => void }) {
    const element = useRef<HTMLDivElement>(null);
    const [clickedMouseHeightInPercentage, setClickedMouseHeightInPercentage] = useState<null | number>(null);
    useEffect(() => {
        return addDragListenersAndReturnRemover({
            element: element, onStartReturnOnMoveAndOnEnd: (event: MouseEvent | TouchEvent) => {
                const startPointY = getYPos(event);
                let currentPosY: number | undefined;
                return {
                    onMove: (e: MouseEvent | TouchEvent) => {
                        currentPosY = getYPos(e) / startPointY;
                        setClickedMouseHeightInPercentage(getYPos(e) / startPointY);
                    },
                    onStop: (e: MouseEvent | TouchEvent) => {
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