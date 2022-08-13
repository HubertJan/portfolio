export function startMeasuringSpeed(element: React.RefObject<HTMLDivElement>): {
    getSpeed: () => number,
    stopMeasuring: () => void
} {
    let lastScrollPos = element.current!.scrollLeft;
    let lastScrollPosTimeStamp = new Date();
    let scrollSpeed = 5;
    let checksWithoutSpeed = 0;
    const speedMeasure = setInterval(() => {
        const currentTime = new Date();
        const currentScrollPos = element.current!.scrollLeft;
        const timeDifference = currentTime.getMilliseconds() - lastScrollPosTimeStamp.getMilliseconds();
        const posDifference = currentScrollPos - lastScrollPos;

        const currentScrollSpeed = posDifference * 100000000000 / timeDifference;
        if (currentScrollSpeed === 0) {
            checksWithoutSpeed += 1;
        } else {
            scrollSpeed = currentScrollSpeed;
        }
        if (checksWithoutSpeed >= 11) {
            scrollSpeed = currentScrollSpeed;
            checksWithoutSpeed = 0;
        }
        lastScrollPos = element.current!.scrollLeft;
        lastScrollPosTimeStamp = new Date();
    }, 1);
    return {
        getSpeed: () => scrollSpeed,
        stopMeasuring: () => {
            clearTimeout(speedMeasure);
        }
    };
}