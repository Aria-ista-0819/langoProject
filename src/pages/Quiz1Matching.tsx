import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCard from "../components/ContainerCard";
import MatchingContainer from "../components/MatchingContainer";
import SectionCard5 from "../components/SectionCard5";
import styles from "./Quiz1Matching.module.css";

const Quiz1Matching: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/quiz-2-fillin");
  }, [navigate]);

  return (
    <div className={styles.quiz1Matching}>
      <div className={styles.navbarParent}>
        <ContainerCard
          dimensionText="/drop-down-arrow2.svg"
          imageDimensionText="/line-411.svg"
          lineIconHeight="103.2px"
          accountWidth="unset"
          accountHeight="unset"
          createWidth="177.8px"
          createHeight="unset"
          exploreLeft="1060px"
          explorePadding="24px"
          studyLeft="693px"
          studyPadding="var(--padding-5xl) var(--padding-2xs)"
          rectangleDivLeft="893px"
          onLangoTextClick={onLangoTextClick}
        />
        <MatchingContainer />
        <button className={styles.vectorParent} onClick={onFrameButtonClick}>
          <img className={styles.frameChild} alt="" src="/arrow-211.svg" />
          <img className={styles.frameItem} alt="" src="/arrow-2.svg" />
          <div className={styles.div}>1 / 5</div>
        </button>
        <img
          className={styles.lightBulb1Icon}
          alt=""
          src="/lightbulb-111@2x.png"
        />
        <SectionCard5 />
      </div>
    </div>
  );
};

export default Quiz1Matching;
