import { AppTouchEvent  } from "./compatibility";

interface addDragListenersProps {
    element: React.RefObject<HTMLDivElement>,

    onStartReturnOnMoveAndOnEnd:
    (event: MouseEvent | AppTouchEvent) =>
        {
            onMove: (event: MouseEvent | AppTouchEvent) => void,
            onStop: (event: MouseEvent | AppTouchEvent) => void,
        },
  
        isDetectionMoveAndEndForWholeWindow?: boolean
}

export function addDragListenersAndReturnRemover(
    { element,
        onStartReturnOnMoveAndOnEnd,
        isDetectionMoveAndEndForWholeWindow = false }: addDragListenersProps
) {
    let elementNode =  isDetectionMoveAndEndForWholeWindow ? document.body : element.current;
    let onStartAndAddListener = (event: MouseEvent | AppTouchEvent) => {
        let { onMove, onStop } = onStartReturnOnMoveAndOnEnd(event);
        let eventMoveName: "mousemove" | "touchmove" = event instanceof MouseEvent ? "mousemove" : "touchmove";
        let eventStopName: "mouseup" | "touchend" = event instanceof MouseEvent ? "mouseup" : "touchend";
        elementNode?.addEventListener(eventMoveName, onMove);
        let onStopAndRemove = (event: MouseEvent | AppTouchEvent ) => {
            onStop(event);
            elementNode?.removeEventListener(eventMoveName, onMove);
            elementNode?.removeEventListener(eventStopName, onStopAndRemove);
        }
        elementNode?.addEventListener(eventStopName, onStopAndRemove)
    };
    elementNode?.addEventListener("mousedown", onStartAndAddListener);
    elementNode?.addEventListener("touchstart", onStartAndAddListener);
    return () => {
        elementNode?.removeEventListener("mousedown", onStartAndAddListener);
        elementNode?.removeEventListener("touchstart", onStartAndAddListener);
    }
}