import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StudyContainer.module.css";

type StudyContainerType = {
  /** Style props */
  propFilter?: CSSProperties["filter"];
};

const StudyContainer: FunctionComponent<StudyContainerType> = ({
  propFilter,
}) => {
  const studyStyle: CSSProperties = useMemo(() => {
    return {
      filter: propFilter,
    };
  }, [propFilter]);

  return (
    <div className={styles.study} style={studyStyle}>
      <div className={styles.study1}>Study</div>
      <div className={styles.studyChild} />
      <div className={styles.wrapperLine4}>
        <img className={styles.wrapperLine4Child} alt="" src="/line-411.svg" />
      </div>
    </div>
  );
};

export default StudyContainer;
