import { FunctionComponent } from "react";
import styles from "./WelcomeBackContainer.module.css";

const WelcomeBackContainer: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <div className={styles.welcomeBack}>Welcome back!</div>
        <div className={styles.pickUpWhere}>
          Pick up where you left off or start something new.
        </div>
      </div>
      <div className={styles.wordOfTheWeekParent}>
        <div className={styles.wordOfThe}>Word of the week</div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <b className={styles.addToVocabulary}>Add to vocabulary</b>
        </div>
        <div className={styles.collection}>
          <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          <div className={styles.kokoro}>Kokoro</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBackContainer;
