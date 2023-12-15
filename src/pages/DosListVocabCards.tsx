import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerCard from "../components/ContainerCard";
import styles from "./DosListVocabCards.module.css";

const DosListVocabCards: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onVocalCardClick = useCallback(() => {
    navigate("/two-list-vocab-cards-back");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/continue-lesson");
  }, [navigate]);

  const onClose1Click = useCallback(() => {
    navigate("/dos-vocab-cards");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/uno-list-vocab-cards");
  }, [navigate]);

  return (
    <div className={styles.dosListVocabCards}>
      <div className={styles.navbarParent}>
        <ContainerCard
          dimensionText="/drop-down-arrow2.svg"
          imageDimensionText="/line-411.svg"
          lineIconHeight="103.2px"
          createWidth="177.8px"
          exploreLeft="1060px"
          explorePadding="24px"
          studyLeft="693px"
          studyPadding="var(--padding-5xl) var(--padding-2xs)"
          rectangleDivLeft="893px"
          onLangoTextClick={onLangoTextClick}
        />
        <img className={styles.menuIcon} alt="" src="/menu-icon11.svg" />
        <button className={styles.vocalCard} onClick={onVocalCardClick}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group11@2x.png"
          />
          <div className={styles.dos}>dos</div>
          <div className={styles.spanish}>Spanish</div>
        </button>
        <div className={styles.frameWrapper}>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/arrow-2.svg" />
            <img className={styles.frameItem} alt="" src="/arrow-211.svg" />
            <div className={styles.div}>1 / 10</div>
          </div>
        </div>
        <div className={styles.learnParent}>
          <div className={styles.learn}>
            <div className={styles.learn1}>Learn</div>
            <div className={styles.learnChild} />
            <div className={styles.wrapperLine4}>
              <img
                className={styles.wrapperLine4Child}
                alt=""
                src="/line-441.svg"
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
        <div className={styles.sideBarWrapper}>
          <div className={styles.sideBar}>
            <div className={styles.sideBarChild} />
            <button className={styles.close1} onClick={onClose1Click} />
            <button className={styles.one}>
              <div className={styles.oneChild} onClick={onRectangle2Click} />
              <div className={styles.one1}>one</div>
            </button>
            <button className={styles.two}>
              <div className={styles.twoChild} />
              <div className={styles.one1}>two</div>
            </button>
            <div className={styles.three}>
              <div className={styles.threeChild} />
              <div className={styles.four}>three</div>
            </div>
            <div className={styles.three2}>
              <div className={styles.threeChild} />
              <div className={styles.four}>four</div>
            </div>
            <div className={styles.three3}>
              <div className={styles.threeChild} />
              <div className={styles.four}>five</div>
            </div>
            <div className={styles.three4}>
              <div className={styles.threeChild} />
              <div className={styles.four}>six</div>
            </div>
            <div className={styles.three5}>
              <div className={styles.threeChild} />
              <div className={styles.four}>seven</div>
            </div>
            <div className={styles.three6}>
              <div className={styles.threeChild} />
              <div className={styles.four}>eight</div>
            </div>
            <div className={styles.three7}>
              <div className={styles.threeChild} />
              <div className={styles.nine}>nine</div>
            </div>
            <div className={styles.three8}>
              <div className={styles.threeChild} />
              <div className={styles.four}>ten</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DosListVocabCards;
