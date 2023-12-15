import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCard from "../components/ContainerCard";
import styles from "./DosVocabCards.module.css";

const DosVocabCards: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onVocalCardClick = useCallback(() => {
    navigate("/two-vocab-cards-back");
  }, [navigate]);

  const onMenuIconClick = useCallback(() => {
    navigate("/dos-list-vocab-cards");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/continue-lesson");
  }, [navigate]);

  return (
    <div className={styles.dosVocabCards}>
      <div className={styles.navbarParent}>
        <ContainerCard
          dimensionText="/drop-down-arrow61.svg"
          imageDimensionText="/line-491.svg"
          lineIconHeight="145px"
          accountWidth="153px"
          accountHeight="124.5px"
          createWidth="177.8px"
          createHeight="36.7px"
          exploreLeft="1067.9px"
          explorePadding="25.372026443481445px 21.631210327148438px"
          studyLeft="707.4px"
          studyPadding="25.372026443481445px 8.631698608398438px"
          rectangleDivLeft="903.9px"
          onLangoTextClick={onLangoTextClick}
        />
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/arrow-251.svg" />
          <img className={styles.frameItem} alt="" src="/arrow-261.svg" />
          <div className={styles.div}>2 / 10</div>
        </div>
        <button className={styles.vocalCard} onClick={onVocalCardClick}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group41@2x.png"
          />
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group51@2x.png"
          />
          <div className={styles.dos}>dos</div>
          <div className={styles.spanish}>Spanish</div>
        </button>
        <div className={styles.learnParent}>
          <div className={styles.learn}>
            <div className={styles.learn1}>Learn</div>
            <div className={styles.learnChild} />
            <div className={styles.wrapperLine4}>
              <img
                className={styles.wrapperLine4Child}
                alt=""
                src="/line-4101.svg"
              />
            </div>
          </div>
          <div className={styles.learn2}>
            <div className={styles.quiz}>Quiz</div>
          </div>
          <div className={styles.beginnerNumbers}>Beginner - Numbers</div>
          <div className={styles.completed}>
            <div className={styles.setAsCompleted}>Set as completed</div>
            <img
              className={styles.checkmark1Icon}
              alt=""
              src="/checkmark-121@2x.png"
            />
          </div>
          <button className={styles.menuIcon} onClick={onMenuIconClick}>
            <img className={styles.menuIconChild} alt="" src="/line-1311.svg" />
            <img className={styles.menuIconItem} alt="" src="/line-1411.svg" />
            <img className={styles.menuIconInner} alt="" src="/line-1511.svg" />
          </button>
          <button className={styles.back} onClick={onBackClick}>
            <div className={styles.back1}>Back</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DosVocabCards;
