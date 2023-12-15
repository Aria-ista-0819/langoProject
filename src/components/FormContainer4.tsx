import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./FormContainer4.module.css";

const FormContainer4: FunctionComponent = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.frame}>
        <div className={styles.lango}>Lango</div>
        <div className={styles.study}>
          <div className={styles.study1}>Study</div>
        </div>
        <div className={styles.account}>
          <div className={styles.myAccount}>My Account</div>
          <img
            className={styles.dropDownArrow}
            alt=""
            src="/drop-down-arrow2.svg"
          />
        </div>
        <Link className={styles.explore} to="/account-explore">
          <div className={styles.study1}>Explore</div>
        </Link>
        <Link className={styles.create} to="/account-create">
          <div className={styles.study1}>Create</div>
        </Link>
      </div>
    </div>
  );
};

export default FormContainer4;
