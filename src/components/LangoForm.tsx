import { FunctionComponent } from "react";
import styles from "./LangoForm.module.css";

type LangoFormType = {
  /** Action props */
  onLangoTextClick?: () => void;
};

const LangoForm: FunctionComponent<LangoFormType> = ({ onLangoTextClick }) => {
  return (
    <div className={styles.navbar}>
      <img className={styles.navbarChild} alt="" src="/line-1.svg" />
      <div className={styles.frame}>
        <div className={styles.lango} onClick={onLangoTextClick}>
          Lango
        </div>
        <div className={styles.account}>
          <div className={styles.myAccount}>My Account</div>
          <img
            className={styles.dropDownArrow}
            alt=""
            src="/drop-down-arrow2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default LangoForm;
