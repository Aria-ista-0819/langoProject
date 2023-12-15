import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ElementaryGrammarContainer.module.css";

type ElementaryGrammarContainerType = {
  courseTitle?: string;
  lessonDescription?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
  propLeft3?: CSSProperties["left"];
};

const ElementaryGrammarContainer: FunctionComponent<
  ElementaryGrammarContainerType
> = ({
  courseTitle,
  lessonDescription,
  propLeft,
  propBackgroundColor,
  propLeft1,
  propLeft2,
  propLeft3,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const collection1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const elementaryGrammar1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const grammarIsAn1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  return (
    <div className={styles.collectionParent} style={frameDiv1Style}>
      <div className={styles.collection} style={collection1Style} />
      <div className={styles.elementaryGrammar} style={elementaryGrammar1Style}>
        {courseTitle}
      </div>
      <div className={styles.grammarIsAn} style={grammarIsAn1Style}>
        {lessonDescription}
      </div>
      <div className={styles.collectionGroup} style={frameDiv2Style}>
        <div className={styles.collection1} />
        <div className={styles.quiz}>{`Quiz `}</div>
        <img className={styles.frameChild} alt="" src="/arrow-111.svg" />
      </div>
    </div>
  );
};

export default ElementaryGrammarContainer;
