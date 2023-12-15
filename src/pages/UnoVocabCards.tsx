import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer1 from "../components/FormContainer1";
import SectionCard6 from "../components/SectionCard6";
import styles from "./UnoVocabCards.module.css";

const UnoVocabCards: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onVocalCardClick = useCallback(() => {
    navigate("/one-vocab-cards-back");
  }, [navigate]);

  const onMenuIconClick = useCallback(() => {
    navigate("/uno-list-vocab-cards");
  }, [navigate]);

  return (
    <div className={styles.unoVocabCards}>
      <div className={styles.navbarParent}>
        <FormContainer1
          dimension="/drop-down-arrow81.svg"
          routePath="/account-explore"
          actionLabel="Explore"
          componentId="/line-451.svg"
          linkPath="/account-create"
          buttonLabel="Create"
          accountWidth="unset"
          createWidth="177.8px"
          studyLeft="707.4px"
          studyPadding="var(--padding-5xl) 8.63157844543457px"
          propLeft="1067.9px"
          propPadding="var(--padding-5xl) 21.631441116333008px"
          onLangoTextClick={onLangoTextClick}
        />
        <SectionCard6 />
        <button className={styles.vocalCard} onClick={onVocalCardClick}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group61@2x.png"
          />
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="/mask-group31@2x.png"
          />
          <div className={styles.uno}>uno</div>
          <div className={styles.spanish}>Spanish</div>
        </button>
        <div className={styles.completed}>
          <div className={styles.setAsCompleted}>Set as completed</div>
          <img
            className={styles.checkmark1Icon}
            alt=""
            src="/checkmark-141@2x.png"
          />
          <button className={styles.menuIcon} onClick={onMenuIconClick}>
            <img className={styles.menuIconChild} alt="" src="/line-1311.svg" />
            <img className={styles.menuIconItem} alt="" src="/line-1311.svg" />
            <img className={styles.menuIconInner} alt="" src="/line-1311.svg" />
          </button>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.frameItem} alt="" src="/arrow-3.svg" />
          <img className={styles.frameInner} alt="" src="/arrow-231.svg" />
          <div className={styles.div}>1 / 10</div>
        </div>
      </div>
    </div>
  );
};

export default UnoVocabCards;
