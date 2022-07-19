export function addDragListeners(element: React.RefObject<HTMLDivElement>,
    onStartReturnOnMoveAndOnEnd:
        (event: MouseEvent | TouchEvent) =>
            {
                onMove: (event: MouseEvent | TouchEvent) => void,
                onStop: (event: MouseEvent | TouchEvent) => void,
            },

) {
    let elementNode = element.current;
    let onStartAndAddListener = (event: MouseEvent | TouchEvent) => {
        let { onMove, onStop } = onStartReturnOnMoveAndOnEnd(event);
        let eventMoveName: "mousemove" | "touchmove" = event instanceof MouseEvent ? "mousemove" : "touchmove";
        let eventStopName: "mouseup" | "touchend" = event instanceof MouseEvent ? "mouseup" : "touchend";
        element.current?.addEventListener(eventMoveName, onMove);
        let onStopAndRemove = (event: MouseEvent | TouchEvent) => {
            onStop(event);
            element.current!.removeEventListener(eventMoveName, onMove);
            element.current!.removeEventListener(eventStopName, onStopAndRemove);
        }
        element.current?.addEventListener(eventStopName, onStopAndRemove)
    };
    elementNode?.addEventListener("mousedown", onStartAndAddListener);
    elementNode?.addEventListener("touchstart", onStartAndAddListener);
    return () => {
        elementNode?.removeEventListener("mousedown", onStartAndAddListener);
        elementNode?.removeEventListener("touchstart", onStartAndAddListener);
    }
}