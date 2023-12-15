import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerFrameLinks2 from "../components/ContainerFrameLinks2";
import styles from "./AccountExplore.module.css";

const AccountExplore: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/search-results");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/join-groups");
  }, [navigate]);

  return (
    <div className={styles.accountExplore}>
      <div className={styles.frameParent}>
        <div className={styles.frame}>
          <ContainerFrameLinks2 />
          <div className={styles.frame1}>
            <div className={styles.searchBar}>
              <div className={styles.search}>
                <div className={styles.searchForCollections}>
                  Search for collections, languages, phrases, ...
                </div>
              </div>
              <button
                className={styles.searchBarChild}
                onClick={onRectangleButtonClick}
              />
              <b className={styles.search1}>Search</b>
              <div className={styles.language}>
                <img
                  className={styles.languageIcon}
                  alt=""
                  src="/language-icon31@2x.png"
                />
                <div className={styles.frame2}>
                  <div className={styles.spanish}>Spanish</div>
                  <img
                    className={styles.dropDownArrow}
                    alt=""
                    src="/drop-down-arrow111.svg"
                  />
                </div>
              </div>
            </div>
            <button className={styles.chatButton}>
              <div className={styles.frame3}>
                <div className={styles.frameChild} onClick={onRectangleClick} />
              </div>
              <div className={styles.frame4}>
                <b className={styles.connect}>Connect</b>
              </div>
              <img className={styles.frameIcon} alt="" src="/frame11@2x.png" />
            </button>
          </div>
        </div>
        <div className={styles.frame5}>
          <div className={styles.exploreDiverseLanguages}>
            Explore diverse languages with one quick search
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountExplore;
