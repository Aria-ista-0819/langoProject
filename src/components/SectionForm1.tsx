import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SectionForm1.module.css";

const SectionForm1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/account-create");
  }, [navigate]);

  return (
    <div className={styles.areYouAPageWrapper}>
      <div className={styles.areYouAPage}>
        <div className={styles.areYouAPageChild} />
        <div className={styles.frameParent}>
          <button
            className={styles.rectangleParent}
            onClick={onFrameButtonClick}
          >
            <div className={styles.frameChild} />
            <b className={styles.student}>Student</b>
          </button>
          <img className={styles.studentIcon} alt="" src="/student4@2x.png" />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild} />
            <b className={styles.instructor}>Instructor</b>
          </div>
          <img
            className={styles.instructorIcon}
            alt=""
            src="/instructor@2x.png"
          />
        </div>
        <div className={styles.frameContainer}>
          <button
            className={styles.rectangleContainer}
            onClick={onFrameButton1Click}
          >
            <div className={styles.frameInner} />
            <b className={styles.creater}>Creater</b>
          </button>
          <img className={styles.creatorIcon} alt="" src="/creator1@2x.png" />
        </div>
        <b className={styles.areYouA}>{`Are you a ... `}</b>
      </div>
    </div>
  );
};

export default SectionForm1;
