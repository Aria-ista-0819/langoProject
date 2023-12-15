import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import NumberFormContainer from "../components/NumberFormContainer";
import Container from "../components/Container";
import VocabularyContainer from "../components/VocabularyContainer";
import styles from "./SearchResults.module.css";

const SearchResults: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  return (
    <div className={styles.searchResults}>
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
          <div className={styles.explore}>
            <div className={styles.explore1}>Explore</div>
            <div className={styles.exploreChild} />
            <div className={styles.wrapperLine4}>
              <img
                className={styles.wrapperLine4Child}
                alt=""
                src="/line-4.svg"
              />
            </div>
          </div>
          <Link className={styles.create} to="/account-create">
            <div className={styles.connect}>Create</div>
          </Link>
          <Link className={styles.study} to="/account-home">
            <div className={styles.connect}>Study</div>
          </Link>
        </div>
        <div className={styles.maskGroupParent}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group71@2x.png"
          />
          <b className={styles.connect}>Connect</b>
        </div>
        <NumberFormContainer />
        <Container />
        <VocabularyContainer />
      </div>
    </div>
  );
};

export default SearchResults;
