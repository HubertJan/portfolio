import { AppTouchEvent } from "./compatibility";

export function isMouseEvent(event: MouseEvent | AppTouchEvent): boolean {
    return event instanceof MouseEvent;
}