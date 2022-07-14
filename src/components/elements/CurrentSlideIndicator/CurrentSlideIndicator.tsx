import styles from "./CurrentPageIndicator.module.scss";


export const CurrentSlideIndicator: React.FC<{
    currentIndex: number, pageCount: number,
    onIndicatorClick?: (currentIndex: number) => void
}>
    = ({
        currentIndex, pageCount, onIndicatorClick = (_) => {}
    }) => {
        let indicators = [];
        for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
            if (pageIndex === currentIndex) {
                indicators.push(<div className={styles.currentSlideIndicator} key={`current-${pageIndex}`}></div>);
                continue;
            }
            indicators.push((<div key={`normal-${pageIndex}`} onClick={() => {onIndicatorClick(pageIndex)}} className={styles.someIndicator}></div>));
        }
        return (<div className={styles.indicators}>
            {
                indicators
            }
        </div>);
    }