import { isMouseEvent } from "./isMouseEvent";

export function scrollToPageIndex(pageIndex: number, ref: HTMLDivElement) {
    ref.scrollTo({
        left: ref.clientWidth * (pageIndex),
        behavior: "smooth",
    });
}

export function scrollToPageIndexWithoutDelay(pageIndex: number, ref: HTMLDivElement) {
    ref.scrollTo({
        left: ref.clientWidth * (pageIndex),
        behavior: "auto",
    });
}

interface ScrollDragPointInterface {
    scrollLeft: number;
    scrollTop: number;
    clientX: number;
    clientY: number;
}

export function scrollByDraggingEvent(event: MouseEvent | TouchEvent,
    dragPoint: ScrollDragPointInterface,
    sliderRef: React.RefObject<HTMLDivElement>,
) {
    const isMouse = isMouseEvent(event);
    if (isMouse) {
        event = event as MouseEvent;
        scrollByDragging(event.clientX, event.clientY, dragPoint, sliderRef);
    } else {
        event = event as TouchEvent;
        scrollByDragging(event.touches[0].clientX, event.touches[0].clientY, dragPoint, sliderRef);
    }
}

export function scrollByDragging(x: number, y: number,
    dragPoint: ScrollDragPointInterface,
    sliderRef: React.RefObject<HTMLDivElement>,
) {
    const newPos = dragPoint.scrollLeft - (x - dragPoint.clientX);
    sliderRef.current!.scroll({
        left: newPos,
        behavior: "auto",
    });
}
