import { FunctionComponent } from "react";
import styles from "./VocabularyContainer.module.css";

const VocabularyContainer: FunctionComponent = () => {
  return (
    <div className={styles.vocabulary}>
      <b className={styles.vocabulary1}>Vocabulary</b>
      <div className={styles.englishParent}>
        <div className={styles.english}>English</div>
        <div className={styles.spanish}>Spanish</div>
        <b className={styles.number}>number</b>
        <b className={styles.nmero}>número</b>
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="/mask-group11@2x.png"
        />
        <div className={styles.frameChild} />
        <div className={styles.div}>+</div>
      </div>
      <img className={styles.book1Icon} alt="" src="/book-1@2x.png" />
      <div className={styles.vocabularyChild} />
    </div>
  );
};

export default VocabularyContainer;
