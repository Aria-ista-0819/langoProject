import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SectionCard2.module.css";

const SectionCard2: FunctionComponent = () => {
  const navigate = useNavigate();

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
            src="/line-431.svg"
          />
        </div>
      </div>
      <div className={styles.learn2}>
        <div className={styles.quiz}>Quiz</div>
      </div>
      <div className={styles.beginnerNumbers}>Beginner - Numbers</div>
      <button className={styles.back} onClick={onBackClick}>
        <div className={styles.back1}>Back</div>
      </button>
    </div>
  );
};

export default SectionCard2;
