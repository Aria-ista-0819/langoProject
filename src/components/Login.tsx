import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import LangoForm2 from "./LangoForm2";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onForgotPasswordClick = useCallback(() => {
    navigate("/verify-account");
  }, [navigate]);

  return (
    <a className={styles.login}>
      <section className={styles.loginComponentParent}>
        <div className={styles.loginComponent}>
          <div className={styles.frame}>
            <div className={styles.logIn}>Log in</div>
            <div className={styles.email}>
              <div className={styles.emailChild} />
              <div className={styles.email1}>Email</div>
            </div>
            <div className={styles.email}>
              <div className={styles.emailChild} />
              <div className={styles.email1}>Password</div>
              <img
                className={styles.hiddenIcon}
                alt=""
                src="/hidden11@2x.png"
              />
            </div>
            <button className={styles.loginButton} onClick={onLoginButtonClick}>
              <b className={styles.done}>Done</b>
            </button>
          </div>
          <div className={styles.frame1}>
            <b className={styles.or}>- OR -</b>
            <div className={styles.frame2}>
              <div className={styles.google}>
                <img
                  className={styles.search1Icon}
                  alt=""
                  src="/search-111@2x.png"
                />
                <div className={styles.google1}>Google</div>
              </div>
              <div className={styles.facebok}>
                <div className={styles.frame3}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/frame41@2x.png"
                  />
                  <div className={styles.frame4}>
                    <div className={styles.facebook}>Facebook</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          className={styles.forgotPassword}
          to="/verify-account"
          onClick={onForgotPasswordClick}
        >{`Forgot password? `}</Link>
        <LangoForm2
          langoPosition="absolute"
          langoTop="0px"
          langoLeft="0px"
          onFrameClick={onFrameClick}
        />
      </section>
    </a>
  );
};

export default Login;
