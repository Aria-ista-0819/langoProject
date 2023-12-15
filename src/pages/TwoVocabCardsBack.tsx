import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import SectionCard1 from "../components/SectionCard1";
import styles from "./TwoVocabCardsBack.module.css";

const TwoVocabCardsBack: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onVocalCardClick = useCallback(() => {
    navigate("/dos-vocab-cards");
  }, [navigate]);

  return (
    <div className={styles.twoVocabCardsBack}>
      <div className={styles.navbarParent}>
        <FormContainer
          dimensionText="/drop-down-arrow51.svg"
          imageDimensions="/line-471.svg"
          explorePadding="24.498960494995117px var(--padding-5xl)"
          studyPadding="24.498960494995117px var(--padding-2xs)"
          onLangoTextClick={onLangoTextClick}
        />
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/arrow-211.svg" />
          <img className={styles.frameItem} alt="" src="/arrow-241.svg" />
          <div className={styles.div}>
            <p className={styles.p}>2 / 10</p>
          </div>
        </div>
        <button className={styles.vocalCard} onClick={onVocalCardClick}>
          <div className={styles.two}>two</div>
          <div className={styles.english}>English</div>
        </button>
        <SectionCard1 />
      </div>
    </div>
  );
};

export default TwoVocabCardsBack;
