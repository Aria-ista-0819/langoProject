import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer1 from "../components/FormContainer1";
import styles from "./OneVocabCardsBack.module.css";

const OneVocabCardsBack: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onArrowIcon2Click = useCallback(() => {
    navigate("/dos-vocab-cards");
  }, [navigate]);

  const onVocalCardClick = useCallback(() => {
    navigate("/uno-vocab-cards");
  }, [navigate]);

  const onMenuIconClick = useCallback(() => {
    navigate("/one-list-vocab-cards-back");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/continue-lesson");
  }, [navigate]);

  return (
    <div className={styles.oneVocabCardsBack}>
      <div className={styles.navbarParent}>
        <FormContainer1
          dimension="/drop-down-arrow61.svg"
          routePath="/account-create"
          actionLabel="Create"
          componentId="/line-491.svg"
          linkPath="/account-explore"
          buttonLabel="Explore"
          accountWidth="155.7px"
          createWidth="173px"
          studyLeft="1067.9px"
          studyPadding="25.372148513793945px 21.631210327148438px"
          propLeft="707.4px"
          propPadding="25.372148513793945px 8.631698608398438px"
          onLangoTextClick={onLangoTextClick}
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" src="/arrow-281.svg" />
          <div className={styles.div}>
            <p className={styles.p}>1 / 10</p>
          </div>
          <img className={styles.frameInner} alt="" src="/arrow-311.svg" />
          <img
            className={styles.arrowIcon}
            alt=""
            src="/arrow-281.svg"
            onClick={onArrowIcon2Click}
          />
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

export default OneVocabCardsBack;
