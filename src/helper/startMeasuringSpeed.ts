export function startMeasuringSpeed(element: React.RefObject<HTMLDivElement>): {
    getSpeed: () => number,
    stopMeasuring: () => void
} {
    let lastScrollPos = element.current!.scrollLeft;
    let lastScrollPosTimeStamp = new Date();
    let scrollSpeed = 0;
    const speedMeasure = setInterval(() => {
        let currentTime = new Date();
        let currentScrollPos = element.current!.scrollLeft;
        let timeDifference = currentTime.getMilliseconds() - lastScrollPosTimeStamp.getMilliseconds();
        let posDifference = currentScrollPos - lastScrollPos;
        scrollSpeed = posDifference * 100000000000 / timeDifference;
        lastScrollPos = element.current!.scrollLeft;
        lastScrollPosTimeStamp = new Date();
    }, 10);
    return {
        getSpeed: () => scrollSpeed,
        stopMeasuring: () => {
            clearTimeout(speedMeasure);
        }
    };
}