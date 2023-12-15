import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LangoForm2 from "./LangoForm2";
import PasswordFormContainer from "./PasswordFormContainer";
import styles from "./ForgotPassword.module.css";

const ForgotPassword: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.forgotPassword}>
      <div className={styles.navbarParent}>
        <LangoForm2 onFrameClick={onFrameClick} />
        <div className={styles.frame}>
          <div className={styles.dontWorryIt}>Don’t worry it happens</div>
          <PasswordFormContainer
            newPassword="New Password"
            propJustifyContent="center"
            propPadding="0px var(--padding-17xl)"
          />
          <PasswordFormContainer
            newPassword="Confirm Password"
            propJustifyContent="flex-end"
            propPadding="var(--padding-xl) var(--padding-17xl)"
          />
          <button className={styles.loginButton} onClick={onLoginButtonClick}>
            <div
              className={styles.loginButtonChild}
              onClick={onRectangleClick}
            />
            <b className={styles.done}>Done</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
