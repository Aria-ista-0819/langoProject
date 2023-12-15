import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateLessonPlanFormContainer.module.css";

const CreateLessonPlanFormContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate("/account-create");
  }, [navigate]);

  return (
    <div className={styles.languageParent}>
      <div className={styles.language}>
        <div className={styles.spanish}>Spanish</div>
        <img
          className={styles.dropDownArrow}
          alt=""
          src="/drop-down-arrow101.svg"
        />
        <img
          className={styles.languageIcon}
          alt=""
          src="/language-icon21@2x.png"
        />
      </div>
      <div className={styles.frameChild} />
      <b className={styles.createANew}>{`Create a new lesson plan `}</b>
      <div className={styles.chooseALanguage}>Choose a language</div>
      <div className={styles.name}>Name</div>
      <div className={styles.frameItem} />
      <div className={styles.description}>Description</div>
      <div className={styles.submit}>
        <div className={styles.submit1}>Submit</div>
      </div>
      <button className={styles.back} onClick={onBackClick}>
        <div className={styles.back1}>Back</div>
      </button>
    </div>
  );
};

export default CreateLessonPlanFormContainer;
