import { FunctionComponent } from "react";
import styles from "./FormContainer2.module.css";

const FormContainer2: FunctionComponent = () => {
  return (
    <div className={styles.youHaveThreeDogsParent}>
      <div className={styles.youHaveThreeContainer}>
        <span>{`You have `}</span>
        <b className={styles.three}>three</b>
        <span> dogs.</span>
      </div>
      <b className={styles.tTienes}>Tú tienes ____ perros</b>
      <div className={styles.answer}>
        <div className={styles.typeAnswerHere}>Type answer here....</div>
        <div className={styles.answer1}>
          <div className={styles.answerChild} />
          <div className={styles.typeAnswerHere1}>Type answer here....</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer2;
