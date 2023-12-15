import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <Link className={styles.signIn} to="/sign-up">
          <b className={styles.signUp}>Sign up</b>
          <div className={styles.signInChild} />
        </Link>
        <Link className={styles.logIn} to="/login">
          <div className={styles.login}>{`Login `}</div>
          <div className={styles.logInChild} />
        </Link>
        <div className={styles.lango}>Lango</div>
        <img className={styles.navbarChild} alt="" src="/line-1.svg" />
        <div className={styles.language}>
          <div className={styles.languageChild} />
          <div className={styles.english}>English</div>
          <img
            className={styles.dropDownArrow}
            alt=""
            src="/drop-down-arrow1.svg"
          />
          <img
            className={styles.languageIcon}
            alt=""
            src="/language-icon@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
