import { FunctionComponent } from "react";
import styles from "./TitleContainer.module.css";

const TitleContainer: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.collection}>
        <div className={styles.collectionChild} />
        <div className={styles.title}>Title</div>
        <div className={styles.spanish}>Spanish</div>
        <div className={styles.creatorName}>Creator: Name</div>
        <div className={styles.description}>Description ...........</div>
        <img className={styles.editIcon} alt="" src="/edit@2x.png" />
        <img className={styles.delete1Icon} alt="" src="/delete-1@2x.png" />
      </div>
    </div>
  );
};

export default TitleContainer;
