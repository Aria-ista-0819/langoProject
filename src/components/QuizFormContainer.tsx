import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./QuizFormContainer.module.css";

type QuizFormContainerType = {
  /** Style props */
  propLeft?: CSSProperties["left"];
};

const QuizFormContainer: FunctionComponent<QuizFormContainerType> = ({
  propLeft,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.collectionParent} style={frameDivStyle}>
      <div className={styles.collection} />
      <div className={styles.frame}>
        <div className={styles.quiz}>{`Quiz `}</div>
        <img className={styles.frameChild} alt="" src="/arrow-1.svg" />
      </div>
    </div>
  );
};

export default QuizFormContainer;
