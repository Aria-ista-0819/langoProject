import { FunctionComponent } from "react";
import styles from "./MatchingContainer.module.css";

const MatchingContainer: FunctionComponent = () => {
  return (
    <div className={styles.matchingLeftParent}>
      <div className={styles.matchingLeft}>
        <div className={styles.one}>
          <img className={styles.oneChild} alt="" src="/rectangle-28.svg" />
          <div className={styles.one1}>one</div>
        </div>
        <div className={styles.eight}>
          <img className={styles.oneChild} alt="" src="/rectangle-28.svg" />
          <div className={styles.one1}>eight</div>
        </div>
        <div className={styles.five}>
          <img className={styles.oneChild} alt="" src="/rectangle-28.svg" />
          <div className={styles.one1}>five</div>
        </div>
      </div>
      <div className={styles.matchingRight}>
        <div className={styles.cinco}>
          <img className={styles.cincoChild} alt="" src="/rectangle-2811.svg" />
          <div className={styles.cinco1}>cinco</div>
        </div>
        <div className={styles.cinco}>
          <img className={styles.cincoChild} alt="" src="/rectangle-2811.svg" />
          <div className={styles.cinco1}>ocho</div>
        </div>
        <div className={styles.cinco}>
          <img className={styles.cincoChild} alt="" src="/rectangle-2811.svg" />
          <div className={styles.cinco1}>uno</div>
        </div>
      </div>
      <div className={styles.matching}>Matching</div>
    </div>
  );
};

export default MatchingContainer;
