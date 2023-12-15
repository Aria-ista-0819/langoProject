import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import SectionCard2 from "../components/SectionCard2";
import styles from "./TwoListVocabCardsBack.module.css";

const TwoListVocabCardsBack: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onVocalCardClick = useCallback(() => {
    navigate("/dos-list-vocab-cards");
  }, [navigate]);

  const onClose1Click = useCallback(() => {
    navigate("/two-vocab-cards-back");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/uno-list-vocab-cards");
  }, [navigate]);

  return (
    <div className={styles.twoListVocabCardsBack}>
      <div className={styles.navbarParent}>
        <FormContainer
          dimensionText="/drop-down-arrow21.svg"
          imageDimensions="/line-421.svg"
          explorePadding="24.600627899169922px var(--padding-5xl)"
          studyPadding="24.600627899169922px var(--padding-2xs)"
          onLangoTextClick={onLangoTextClick}
        />
        <img className={styles.menuIcon} alt="" src="/menu-icon.svg" />
      </div>
      <div className={styles.twoListVocabCardsBackInner}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/arrow-2.svg" />
          <img className={styles.frameItem} alt="" src="/arrow-211.svg" />
          <div className={styles.div}>
            <p className={styles.p}>1 / 10</p>
          </div>
        </div>
      </div>
      <button className={styles.vocalCard} onClick={onVocalCardClick}>
        <div className={styles.two}>two</div>
        <div className={styles.english}>English</div>
      </button>
      <SectionCard2 />
      <div className={styles.sideBarWrapper}>
        <div className={styles.sideBar}>
          <div className={styles.sideBarChild} />
          <button className={styles.close1} onClick={onClose1Click} />
          <button className={styles.one}>
            <div className={styles.oneChild} onClick={onRectangle1Click} />
            <div className={styles.one1}>one</div>
          </button>
          <button className={styles.two1}>
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
  );
};

export default TwoListVocabCardsBack;
