import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ElementaryGrammarContainer1 from "./ElementaryGrammarContainer1";
import QuizFormContainer from "./QuizFormContainer";
import styles from "./BeginnerNumbersFormContainer.module.css";

const BeginnerNumbersFormContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/uno-vocab-cards");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/quiz-1-matching");
  }, [navigate]);

  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <button className={styles.frame2}>
          <div className={styles.collection} />
          <div className={styles.begineerNumbers}>
            <div className={styles.collection1}>
              <div
                className={styles.collectionChild}
                onClick={onRectangleClick}
              />
            </div>
            <div className={styles.frame3}>
              <div
                className={styles.beginnerNumbers}
              >{`Beginner - Numbers `}</div>
              <div className={styles.getStartedWith}>
                Get started with learning the fundamentals of learning a
                language ...
              </div>
            </div>
          </div>
        </button>
        <ElementaryGrammarContainer1
          courseTitle="Elementary - Grammar"
          lessonDescription="Grammar is an important aspect for a beginner to grappel with ..."
          propBackgroundColor="#fff"
          propMarginLeft="31px"
          propMarginLeft1="31px"
        />
        <ElementaryGrammarContainer1
          courseTitle="Beginner - Basic Conversation"
          lessonDescription="Learn some basic expressions and vocabulary to get you started ..."
          propBackgroundColor="#ecffe6"
          propMarginLeft="27px"
          propMarginLeft1="27px"
        />
      </div>
      <div className={styles.frame4}>
        <div className={styles.frameWrapper}>
          <div className={styles.frame5}>
            <button className={styles.collectionParent}>
              <div className={styles.collection2}>
                <div
                  className={styles.collectionItem}
                  onClick={onRectangle1Click}
                />
              </div>
              <div className={styles.frame6}>
                <div className={styles.quiz}>{`Quiz `}</div>
                <img className={styles.frameChild} alt="" src="/arrow-1.svg" />
              </div>
            </button>
            <QuizFormContainer propLeft="922.9px" />
            <QuizFormContainer propLeft="456.9px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginnerNumbersFormContainer;
