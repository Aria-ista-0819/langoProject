import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCard from "../components/ContainerCard";
import ContainerSidebarButtons from "../components/ContainerSidebarButtons";
import styles from "./OneListVocabCardsBack.module.css";

const OneListVocabCardsBack: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onClose1Click = useCallback(() => {
    navigate("/one-vocab-cards-back");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/dos-list-vocab-cards");
  }, [navigate]);

  const onVocalCardClick = useCallback(() => {
    navigate("/uno-list-vocab-cards");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/continue-lesson");
  }, [navigate]);

  return (
    <div className={styles.oneListVocabCardsBack}>
      <div className={styles.navbarParent}>
        <ContainerCard
          dimensionText="/drop-down-arrow31.svg"
          imageDimensionText="/line-451.svg"
          lineIconHeight="103.2px"
          accountWidth="153px"
          accountHeight="unset"
          createWidth="unset"
          createHeight="unset"
          exploreLeft="1067.9px"
          explorePadding="var(--padding-5xl) 21.63157844543457px"
          studyLeft="707.4px"
          studyPadding="var(--padding-5xl) 8.63157844543457px"
          rectangleDivLeft="903.9px"
          onLangoTextClick={onLangoTextClick}
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" src="/arrow-2.svg" />
          <img className={styles.frameInner} alt="" src="/arrow-221.svg" />
          <div className={styles.div}>
            <p className={styles.p}>1 / 10</p>
          </div>
        </div>
        <button className={styles.vocalCard} onClick={onVocalCardClick}>
          <div className={styles.one}>one</div>
          <div className={styles.english}>English</div>
        </button>
        <div className={styles.learnParent}>
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
          <div className={styles.learn2}>
            <div className={styles.quiz}>Quiz</div>
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
        <ContainerSidebarButtons
          propLeft="17px"
          propWidth="267px"
          propBackgroundImage="url('/close1@2x.png')"
          onClose1Click={onClose1Click}
          onRectangle5Click={onRectangle2Click}
        />
      </div>
    </div>
  );
};

export default OneListVocabCardsBack;
