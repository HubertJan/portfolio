import styles from "./CurrentPageIndicator.module.scss";


export const CurrentPageIndicator: React.FC<{
    currentIndex: number, pageCount: number,
    onIndicatorClick?: (currentIndex: number) => void
}>
    = ({
        currentIndex, pageCount, onIndicatorClick = (_) => {}
    }) => {
        let indicators = [];
        for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
            if (pageIndex === currentIndex) {
                indicators.push(<div className={styles.currentSlideIndicator}></div>);
                continue;
            }
            indicators.push((<div onClick={() => {onIndicatorClick(pageIndex)}} className={styles.someIndicator}></div>));
        }
        return (<div className={styles.indicators}>
            {
                indicators
            }
        </div>);
    }