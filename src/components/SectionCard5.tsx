import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SectionCard5.module.css";

const SectionCard5: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate("/continue-lesson");
  }, [navigate]);

  return (
    <div className={styles.learnParent}>
      <div className={styles.learn}>
        <div className={styles.learn1}>Learn</div>
      </div>
      <div className={styles.quiz}>
        <div className={styles.learn1}>Quiz</div>
        <div className={styles.wrapperLine4}>
          <img
            className={styles.wrapperLine4Child}
            alt=""
            src="/line-4131.svg"
          />
        </div>
      </div>
      <div className={styles.beginnerNumbers}>Beginner - Numbers</div>
      <div className={styles.completed}>
        <div className={styles.setAsCompleted}>Set as completed</div>
        <img
          className={styles.checkmark1Icon}
          alt=""
          src="/checkmark-1@2x.png"
        />
      </div>
      <button className={styles.back} onClick={onBackClick}>
        <div className={styles.back1}>Back</div>
      </button>
    </div>
  );
};

export default SectionCard5;
