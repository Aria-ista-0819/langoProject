import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormContainer3 from "../components/FormContainer3";
import styles from "./AccountStudy.module.css";

const AccountStudy: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  return (
    <div className={styles.accountStudy}>
      <div className={styles.navbarParent}>
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
        </div>
        <Link className={styles.create} to="/account-create">
          <div className={styles.create1}>Create</div>
        </Link>
        <Link className={styles.explore} to="/account-explore">
          <div className={styles.create1}>Explore</div>
        </Link>
        <Link className={styles.study} to="/account-home">
          <div className={styles.study1}>Study</div>
          <div className={styles.studyChild} />
          <div className={styles.wrapperLine4}>
            <img
              className={styles.wrapperLine4Child}
              alt=""
              src="/line-411.svg"
            />
          </div>
        </Link>
        <img className={styles.studentIcon} alt="" src="/student11@2x.png" />
        <FormContainer3 />
      </div>
    </div>
  );
};

export default AccountStudy;
