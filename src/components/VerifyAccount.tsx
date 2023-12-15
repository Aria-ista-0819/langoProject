import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./VerifyAccount.module.css";

const VerifyAccount: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContinueButtonClick = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);

  return (
    <div className={styles.verifyAccount}>
      <div className={styles.navbarParent}>
        <div className={styles.navbar}>
          <button className={styles.lango} onClick={onLangoClick}>
            Lango
          </button>
          <img className={styles.navbarChild} alt="" src="/line-1.svg" />
        </div>
        <div className={styles.frame}>
          <div className={styles.enterYourEmail}>
            Enter your email to verify your account
          </div>
          <div className={styles.email}>
            <div className={styles.email1}>Email</div>
          </div>
          <button
            className={styles.continueButton}
            onClick={onContinueButtonClick}
          >
            <b className={styles.continue}>Continue</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
