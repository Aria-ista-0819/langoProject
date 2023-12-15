import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MultipleChoiceCard.module.css";

type MultipleChoiceCardType = {
  audioOptions?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const MultipleChoiceCard: FunctionComponent<MultipleChoiceCardType> = ({
  audioOptions,
  propTop,
  propLeft,
  propLeft1,
  propWidth,
}) => {
  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const multipleChoiceStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth,
    };
  }, [propLeft1, propWidth]);

  return (
    <button className={styles.collectionParent} style={frameButtonStyle}>
      <div className={styles.collection}>
        <div className={styles.collectionChild} />
      </div>
      <div className={styles.multipleChoice} style={multipleChoiceStyle}>
        <p className={styles.multiple}>{audioOptions}</p>
        <p className={styles.multiple}>choice</p>
      </div>
    </button>
  );
};

export default MultipleChoiceCard;
