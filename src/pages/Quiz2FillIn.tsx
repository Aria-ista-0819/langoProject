import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import FormContainer2 from "../components/FormContainer2";
import SectionCard3 from "../components/SectionCard3";
import styles from "./Quiz2FillIn.module.css";

const Quiz2FillIn: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/quiz-1-matching");
  }, [navigate]);

  return (
    <div className={styles.quiz2FillIn}>
      <div className={styles.navbarParent}>
        <FormContainer
          dimensionText="/drop-down-arrow71.svg"
          imageDimensions="/line-4111.svg"
          explorePadding="24.473522186279297px var(--padding-5xl)"
          studyPadding="24.473522186279297px var(--padding-2xs)"
          onLangoTextClick={onLangoTextClick}
        />
        <button className={styles.vectorParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="/arrow-211.svg" />
          <img className={styles.frameItem} alt="" src="/arrow-271.svg" />
          <div className={styles.div}>2 / 5</div>
        </button>
        <img
          className={styles.kisspngThoughtClipArtThinkIcon}
          alt=""
          src="/kisspngthoughtclipartthinkingimages5a88cec22e32e3-1@2x.png"
        />
        <div className={styles.iHaveTwoCatsParent}>
          <div className={styles.iHaveTwoContainer}>
            <span>{`I have `}</span>
            <b className={styles.two}>two</b>
            <span> cats</span>
          </div>
          <b className={styles.yoTengo}>Yo tengo ______ gatos.</b>
          <div className={styles.answer}>
            <div className={styles.answerChild} />
            <div className={styles.typeAnswerHere}>Type answer here....</div>
          </div>
        </div>
        <FormContainer2 />
        <img
          className={styles.lightBulb1Icon}
          alt=""
          src="/lightbulb-1@2x.png"
        />
        <SectionCard3 />
      </div>
    </div>
  );
};

export default Quiz2FillIn;
