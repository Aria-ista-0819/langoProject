import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/continue-lesson2");
  }, [navigate]);

  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <img className={styles.studentIcon} alt="" src="/student1@2x.png" />
        <div className={styles.frame2}>
          <button
            className={styles.collectionParent}
            onClick={onFrameButtonClick}
          >
            <div className={styles.collection}>
              <div className={styles.collectionChild} />
            </div>
            <div className={styles.createYourOwn}>Create your own</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
