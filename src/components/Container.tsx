import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Container.module.css";

const Container: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/continue-lesson");
  }, [navigate]);

  return (
    <div className={styles.lessonPlansWrapper}>
      <div className={styles.lessonPlans}>
        <b className={styles.courses}>Courses</b>
        <Link className={styles.beginnerNumbersParent} to="/continue-lesson">
          <div className={styles.beginnerNumbers}>Beginner : Numbers</div>
          <div className={styles.spanish}>Spanish</div>
          <div className={styles.creatorMikeHughes}>Creator: Mike Hughes</div>
          <div className={styles.wordsAndPhrases}>
            10 words and phrases, quiz available
          </div>
          <div className={styles.div} onClick={onTextClick}>
            +
          </div>
        </Link>
        <img className={styles.book1Icon} alt="" src="/book-1@2x.png" />
        <div className={styles.lessonPlansChild} />
        <div className={styles.seeAll}>{`See all >`}</div>
      </div>
    </div>
  );
};

export default Container;
