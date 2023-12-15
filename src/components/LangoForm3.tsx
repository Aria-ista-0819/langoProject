import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StudyContainer from "./StudyContainer";
import styles from "./LangoForm3.module.css";

const LangoForm3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  return (
    <div className={styles.navbar}>
      <div className={styles.lango} onClick={onLangoTextClick}>
        Lango
      </div>
      <img className={styles.navbarChild} alt="" src="/line-1.svg" />
      <div className={styles.account}>
        <div className={styles.myAccount}>My Account</div>
        <img
          className={styles.dropDownArrow}
          alt=""
          src="/drop-down-arrow2.svg"
        />
      </div>
      <div className={styles.create}>
        <div className={styles.create1}>Create</div>
      </div>
      <div className={styles.explore}>
        <div className={styles.create1}>Explore</div>
      </div>
      <StudyContainer />
    </div>
  );
};

export default LangoForm3;
