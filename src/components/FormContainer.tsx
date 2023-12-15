import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import styles from "./FormContainer.module.css";

type FormContainerType = {
  dimensionText?: string;
  imageDimensions?: string;

  /** Style props */
  explorePadding?: CSSProperties["padding"];
  studyPadding?: CSSProperties["padding"];

  /** Action props */
  onLangoTextClick?: () => void;
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  dimensionText,
  imageDimensions,
  explorePadding,
  studyPadding,
  onLangoTextClick,
}) => {
  const createStyle: CSSProperties = useMemo(() => {
    return {
      padding: explorePadding,
    };
  }, [explorePadding]);

  const exploreStyle: CSSProperties = useMemo(() => {
    return {
      padding: studyPadding,
    };
  }, [studyPadding]);

  return (
    <div className={styles.navbar}>
      <div className={styles.lango} onClick={onLangoTextClick}>
        Lango
      </div>
      <img className={styles.navbarChild} alt="" src="/line-1.svg" />
      <div className={styles.account}>
        <div className={styles.myAccount}>My Account</div>
        <img className={styles.dropDownArrow} alt="" src={dimensionText} />
      </div>
      <Link className={styles.create} to="/account-create" style={createStyle}>
        <div className={styles.create1}>Create</div>
      </Link>
      <Link
        className={styles.explore}
        to="/account-explore"
        style={exploreStyle}
      >
        <div className={styles.explore1}>Explore</div>
      </Link>
      <div className={styles.study}>
        <div className={styles.study1}>Study</div>
        <div className={styles.studyChild} />
        <div className={styles.wrapperLine4}>
          <img
            className={styles.wrapperLine4Child}
            alt=""
            src={imageDimensions}
          />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
