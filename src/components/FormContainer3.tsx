import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormContainer3.module.css";

const FormContainer3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContinueYourLessonClick = useCallback(() => {
    navigate("/continue-lesson");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/continue-lesson");
  }, [navigate]);

  return (
    <div className={styles.languages}>
      <b
        className={styles.continueYourLesson}
        onClick={onContinueYourLessonClick}
      >
        Continue your lesson
      </b>
      <button className={styles.language1}>
        <div className={styles.language1Child} onClick={onRectangleClick} />
        <div className={styles.spanish}>Spanish</div>
        <div className={styles.lessonPlans}>3 Lesson plans</div>
      </button>
      <img className={styles.book1Icon} alt="" src="/book-1@2x.png" />
      <div className={styles.languagesChild} />
      <div className={styles.language2}>
        <div className={styles.language2Child} />
        <div className={styles.french}>French</div>
        <div className={styles.lessonPlans1}>0 Lesson plans</div>
      </div>
    </div>
  );
};

export default FormContainer3;
