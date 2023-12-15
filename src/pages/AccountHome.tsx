import { FunctionComponent, useCallback } from "react";
import FormContainer4 from "../components/FormContainer4";
import WelcomeBackContainer from "../components/WelcomeBackContainer";
import { useNavigate } from "react-router-dom";
import styles from "./AccountHome.module.css";

const AccountHome: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCollectionClick = useCallback(() => {
    navigate("/account-study");
  }, [navigate]);

  return (
    <div className={styles.accountHome}>
      <div className={styles.navbarParent}>
        <FormContainer4 />
        <WelcomeBackContainer />
        <div className={styles.frame}>
          <button className={styles.collection} onClick={onCollectionClick}>
            <div className={styles.myLanguages}>My languages</div>
          </button>
          <img className={styles.studentIcon} alt="" src="/student31@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default AccountHome;
