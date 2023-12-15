import { FunctionComponent } from "react";
import styles from "./ExploreContainer.module.css";

const ExploreContainer: FunctionComponent = () => {
  return (
    <div className={styles.explore}>
      <div className={styles.frame}>
        <div className={styles.explore1}>Explore</div>
      </div>
      <div className={styles.wrapperLine4}>
        <img className={styles.wrapperLine4Child} alt="" src="/line-4.svg" />
      </div>
    </div>
  );
};

export default ExploreContainer;
