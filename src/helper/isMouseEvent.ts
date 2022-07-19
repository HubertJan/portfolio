export function isMouseEvent(event: MouseEvent | TouchEvent): boolean {
    return event instanceof MouseEvent;
}