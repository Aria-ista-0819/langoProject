import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SectionCard6.module.css";

const SectionCard6: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/continue-lesson");
  }, [navigate]);

  return (
    <div className={styles.backWrapper}>
      <div className={styles.back}>
        <button className={styles.backChild} onClick={onRectangleButtonClick} />
        <div className={styles.back1}>Back</div>
        <div className={styles.learn}>
          <div className={styles.learn1}>Learn</div>
          <div className={styles.learnChild} />
          <div className={styles.wrapperLine4}>
            <img
              className={styles.wrapperLine4Child}
              alt=""
              src="/line-461.svg"
            />
          </div>
        </div>
        <div className={styles.quiz}>
          <div className={styles.quiz1}>Quiz</div>
        </div>
        <div className={styles.beginnerNumbers}>Beginner - Numbers</div>
      </div>
    </div>
  );
};

export default SectionCard6;
