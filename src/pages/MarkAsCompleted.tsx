import { FunctionComponent, useCallback } from "react";
import LangoForm3 from "../components/LangoForm3";
import { useNavigate } from "react-router-dom";
import ElementaryGrammarContainer from "../components/ElementaryGrammarContainer";
import styles from "./MarkAsCompleted.module.css";

const MarkAsCompleted: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer2Click = useCallback(() => {
    navigate("/continue-lesson2");
  }, [navigate]);

  const onBackContainerClick = useCallback(() => {
    navigate("/account-study");
  }, [navigate]);

  return (
    <div className={styles.markAsCompleted}>
      <div className={styles.navbarParent}>
        <LangoForm3 />
        <div className={styles.collection} />
        <img className={styles.studentIcon} alt="" src="/student11@2x.png" />
        <div className={styles.begineerNumbersParent}>
          <div className={styles.begineerNumbers}>
            <div className={styles.collection1} />
            <div
              className={styles.beginnerNumbers}
            >{`Beginner - Numbers `}</div>
            <div className={styles.getStartedWith}>
              Get started with learning the fundamentals of learning a language
              ...
            </div>
          </div>
          <div className={styles.collectionParent}>
            <div className={styles.collection2} />
            <div className={styles.quiz}>{`Quiz `}</div>
            <img className={styles.frameChild} alt="" src="/arrow-111.svg" />
          </div>
        </div>
        <div
          className={styles.collectionGroup}
          onClick={onFrameContainer2Click}
        >
          <div className={styles.collection3} />
          <div className={styles.createYourOwn}>Create your own</div>
        </div>
        <ElementaryGrammarContainer
          courseTitle="Elementary - Grammar"
          lessonDescription="Grammar is an important aspect for a beginner to grappel with ..."
          propLeft="537.5px"
          propBackgroundColor="#fff"
          propLeft1="30.5px"
          propLeft2="30.5px"
          propLeft3="37.5px"
        />
        <ElementaryGrammarContainer
          courseTitle="Beginner - Basic Conversation"
          lessonDescription="Learn some basic expressions and vocabulary to get you started ..."
          propLeft="999px"
          propBackgroundColor="#ecffe6"
          propLeft1="27px"
          propLeft2="27px"
          propLeft3="42px"
        />
        <div className={styles.bienvenidosParent}>
          <b className={styles.bienvenidos}>Bienvenidos</b>
          <img className={styles.frameItem} alt="" src="/line-1.svg" />
          <div className={styles.back} onClick={onBackContainerClick}>
            <div className={styles.back1}>Back</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkAsCompleted;
