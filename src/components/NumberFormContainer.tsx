import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NumberFormContainer.module.css";

const NumberFormContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/search-results");
  }, [navigate]);

  return (
    <div className={styles.searchParent}>
      <div className={styles.search}>
        <div className={styles.numbers}>Numbers</div>
      </div>
      <div className={styles.frameChild} onClick={onRectangleClick} />
      <b className={styles.search1}>Search</b>
      <div className={styles.language}>
        <div className={styles.spanish}>Spanish</div>
        <img
          className={styles.dropDownArrow}
          alt=""
          src="/drop-down-arrow91.svg"
        />
        <img
          className={styles.languageIcon}
          alt=""
          src="/language-icon11@2x.png"
        />
      </div>
    </div>
  );
};

export default NumberFormContainer;
