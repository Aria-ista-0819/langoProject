import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LangoForm2 from "./LangoForm2";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <div className={styles.navbarParent}>
        <LangoForm2
          langoPosition="unset"
          langoTop="unset"
          langoLeft="unset"
          onFrameClick={onFrameClick}
        />
        <div className={styles.frame}>
          <div className={styles.loginComponent}>
            <div className={styles.frame1}>
              <div className={styles.signUp1}>Sign up</div>
              <div className={styles.email}>
                <div className={styles.emailChild} />
                <div className={styles.email1}>Email</div>
              </div>
              <div className={styles.email}>
                <div className={styles.emailChild} />
                <img
                  className={styles.hiddenIcon}
                  alt=""
                  src="/hidden@2x.png"
                />
                <div className={styles.email1}>Password</div>
              </div>
              <button
                className={styles.loginButton}
                onClick={onLoginButtonClick}
              >
                <b className={styles.done}>Done</b>
              </button>
            </div>
            <div className={styles.frame2}>
              <b className={styles.or}>-OR-</b>
              <div className={styles.frame3}>
                <div className={styles.google}>
                  <img
                    className={styles.search1Icon}
                    alt=""
                    src="/search-1@2x.png"
                  />
                  <div className={styles.google1}>Google</div>
                </div>
                <div className={styles.facebok}>
                  <div className={styles.facebokChild} />
                  <div className={styles.frame4}>
                    <div className={styles.facebook}>Facebook</div>
                  </div>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame3@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
