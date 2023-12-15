import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ElementaryGrammarContainer1.module.css";

type ElementaryGrammarContainer1Type = {
  courseTitle?: string;
  lessonDescription?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propMarginLeft1?: CSSProperties["marginLeft"];
};

const ElementaryGrammarContainer1: FunctionComponent<
  ElementaryGrammarContainer1Type
> = ({
  courseTitle,
  lessonDescription,
  propBackgroundColor,
  propMarginLeft,
  propMarginLeft1,
}) => {
  const collectionStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const elementaryGrammarStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const grammarIsAnStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft1,
    };
  }, [propMarginLeft1]);

  return (
    <div className={styles.frame}>
      <div className={styles.collection} style={collectionStyle} />
      <div className={styles.frame1}>
        <div
          className={styles.elementaryGrammar}
          style={elementaryGrammarStyle}
        >
          {courseTitle}
        </div>
        <div className={styles.grammarIsAn} style={grammarIsAnStyle}>
          {lessonDescription}
        </div>
      </div>
    </div>
  );
};

export default ElementaryGrammarContainer1;
