import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContainerSidebarButtons from "../components/ContainerSidebarButtons";
import styles from "./UnoListVocabCards.module.css";

const UnoListVocabCards: FunctionComponent = () => {
  const navigate = useNavigate();

  const onClose1Click = useCallback(() => {
    navigate("/uno-vocab-cards");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/dos-list-vocab-cards");
  }, [navigate]);

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onVocalCardClick = useCallback(() => {
    navigate("/one-list-vocab-cards-back");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/continue-lesson");
  }, [navigate]);

  return (
    <div className={styles.unoListVocabCards}>
      <div className={styles.navbarParent}>
        <div className={styles.navbar}>
          <div className={styles.lango} onClick={onLangoTextClick}>
            Lango
          </div>
          <img className={styles.navbarChild} alt="" src="/line-1.svg" />
          <div className={styles.account}>
            <div className={styles.myAccount}>My Account</div>
            <img
              className={styles.dropDownArrow}
              alt=""
              src="/drop-down-arrow41.svg"
            />
          </div>
          <div className={styles.study}>
            <div className={styles.study1}>Study</div>
            <div className={styles.studyChild} />
            <div className={styles.wrapperLine4}>
              <img
                className={styles.wrapperLine4Child}
                alt=""
                src="/line-451.svg"
              />
            </div>
          </div>
          <Link className={styles.explore} to="/account-explore">
            <div className={styles.quiz}>Explore</div>
          </Link>
          <Link className={styles.create} to="/account-create">
            <div className={styles.quiz}>Create</div>
          </Link>
        </div>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/arrow-231.svg" />
          <img className={styles.frameItem} alt="" src="/arrow-3.svg" />
          <div className={styles.div}>1 / 10</div>
        </div>
        <button className={styles.vocalCard} onClick={onVocalCardClick}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group21@2x.png"
          />
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group31@2x.png"
          />
          <div className={styles.uno}>uno</div>
          <div className={styles.spanish}>Spanish</div>
        </button>
        <div className={styles.learnParent}>
          <div className={styles.learn}>
            <div className={styles.learn1}>Learn</div>
            <div className={styles.learnChild} />
            <div className={styles.wrapperLine41}>
              <img
                className={styles.wrapperLine4Item}
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
              src="/checkmark-111@2x.png"
            />
          </div>
          <button className={styles.back} onClick={onBackClick}>
            <div className={styles.back1}>Back</div>
          </button>
        </div>
        <ContainerSidebarButtons
          propLeft="43.2px"
          propWidth="262.3px"
          propBackgroundImage="url('/close11@2x.png')"
          onClose1Click={onClose1Click}
          onRectangle5Click={onRectangle2Click}
        />
      </div>
    </div>
  );
};

export default UnoListVocabCards;
