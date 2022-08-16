import { AppTouchEvent } from "./compatibility";
import { isMouseEvent } from "./isMouseEvent";
import { scrollBy } from "seamless-scroll-polyfill";


export function scrollToPageIndex(pageIndex: number, ref: HTMLDivElement) {
    console.log(ref.clientWidth);
    const supposedScrollWidth = pageIndex * ref.clientWidth;
    const differenceToCurrent = supposedScrollWidth - ref.scrollLeft;
    scrollBy(ref, {
        left: differenceToCurrent,
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

export function scrollByDraggingEvent(event: MouseEvent | AppTouchEvent,
    dragPoint: ScrollDragPointInterface,
    sliderRef: React.RefObject<HTMLDivElement>,
) {
    const isMouse = isMouseEvent(event);
    if (isMouse) {
        event = event as MouseEvent;
        scrollByDragging(event.clientX, event.clientY, dragPoint, sliderRef);
    } else {
        event = event as AppTouchEvent;
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
