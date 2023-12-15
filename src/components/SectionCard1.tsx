import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SectionCard1.module.css";

const SectionCard1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuIconClick = useCallback(() => {
    navigate("/two-list-vocab-cards-back");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/continue-lesson");
  }, [navigate]);

  return (
    <div className={styles.learnParent}>
      <div className={styles.learn}>
        <div className={styles.learn1}>Learn</div>
        <div className={styles.learnChild} />
        <div className={styles.wrapperLine4}>
          <img
            className={styles.wrapperLine4Child}
            alt=""
            src="/line-481.svg"
          />
        </div>
      </div>
      <div className={styles.learn2}>
        <div className={styles.quiz}>Quiz</div>
      </div>
      <div className={styles.beginnerNumbers}>Beginner - Numbers</div>
      <button className={styles.menuIcon} onClick={onMenuIconClick}>
        <img className={styles.menuIconChild} alt="" src="/line-13.svg" />
        <img className={styles.menuIconItem} alt="" src="/line-14.svg" />
        <img className={styles.menuIconInner} alt="" src="/line-15.svg" />
      </button>
      <button className={styles.back} onClick={onBackClick}>
        <div className={styles.back1}>Back</div>
      </button>
    </div>
  );
};

export default SectionCard1;
