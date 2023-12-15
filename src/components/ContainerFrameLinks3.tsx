import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ContainerFrameLinks3.module.css";

const ContainerFrameLinks3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  return (
    <div className={styles.frame}>
      <div className={styles.navbar}>
        <img className={styles.navbarChild} alt="" src="/line-1.svg" />
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
        <div className={styles.create}>
          <div className={styles.frame1}>
            <div className={styles.create1}>Create</div>
          </div>
          <div className={styles.wrapperLine4}>
            <img
              className={styles.wrapperLine4Child}
              alt=""
              src="/line-4.svg"
            />
          </div>
        </div>
        <Link className={styles.study} to="/account-home">
          <div className={styles.study1}>Study</div>
        </Link>
        <Link className={styles.explore} to="/account-explore">
          <div className={styles.study1}>Explore</div>
        </Link>
      </div>
    </div>
  );
};

export default ContainerFrameLinks3;
