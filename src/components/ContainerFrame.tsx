import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ContainerFrame.module.css";

const ContainerFrame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onBackClick = useCallback(() => {
    navigate("/account-study");
  }, [navigate]);

  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.frame2}>
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
              <Link className={styles.create} to="/account-create">
                <div className={styles.create1}>Create</div>
              </Link>
              <div className={styles.study}>
                <div className={styles.frame4}>
                  <div className={styles.bienvenidos}>Study</div>
                </div>
                <div className={styles.wrapperLine4}>
                  <img
                    className={styles.wrapperLine4Child}
                    alt=""
                    src="/line-4.svg"
                  />
                </div>
              </div>
            </div>
            <Link className={styles.explore} to="/account-explore">
              <div className={styles.create1}>Explore</div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.frame5}>
        <button className={styles.back} onClick={onBackClick}>
          <div className={styles.back1}>Back</div>
        </button>
        <b className={styles.bienvenidos}>Bienvenidos</b>
      </div>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
    </div>
  );
};

export default ContainerFrame;
