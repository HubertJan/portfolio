import { useEffect, useState } from "react";

export function useResize() {
    const [hasBeenResized, setHasBeenResized] = useState(false);

    useEffect(() => {
        const onResize = () => {
            setHasBeenResized(true);
        }
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    return { hasBeenResized, acknowledgeResize: () => setHasBeenResized(false) };
}
