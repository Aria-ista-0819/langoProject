import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SectionCard3.module.css";

const SectionCard3: FunctionComponent = () => {
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
        <div className={styles.quiz1}>Quiz</div>
        <div className={styles.quizChild} />
        <div className={styles.wrapperLine4}>
          <img
            className={styles.wrapperLine4Child}
            alt=""
            src="/line-4121.svg"
          />
        </div>
      </div>
      <div className={styles.beginnerNumbers}>Beginner - Numbers</div>
      <Link className={styles.completed} to="/mark-as-completed">
        <div className={styles.setAsCompleted}>Set as completed</div>
        <img
          className={styles.checkmark1Icon}
          alt=""
          src="/checkmark-131@2x.png"
        />
      </Link>
      <button className={styles.back} onClick={onBackClick}>
        <div className={styles.back1}>Back</div>
      </button>
    </div>
  );
};

export default SectionCard3;
