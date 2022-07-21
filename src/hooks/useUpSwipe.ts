import { useEffect, useRef, useState } from "react";
import { addDragListeners } from "src/helper/addDragListeners";
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
        addDragListeners({
            element: element, onStartReturnOnMoveAndOnEnd: (event) => {
                const startPointY = getYPos(event);
                let currentPosY: number | undefined;
                return {
                    onMove: (e) => {
                        currentPosY = getYPos(e) / startPointY;
                        setClickedMouseHeightInPercentage(getYPos(e) / startPointY);
                    },
                    onStop: (e) => {
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