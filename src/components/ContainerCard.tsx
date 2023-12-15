import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import styles from "./ContainerCard.module.css";

type ContainerCardType = {
  dimensionText?: string;
  imageDimensionText?: string;

  /** Style props */
  lineIconHeight?: CSSProperties["height"];
  accountWidth?: CSSProperties["width"];
  accountHeight?: CSSProperties["height"];
  createWidth?: CSSProperties["width"];
  createHeight?: CSSProperties["height"];
  exploreLeft?: CSSProperties["left"];
  explorePadding?: CSSProperties["padding"];
  studyLeft?: CSSProperties["left"];
  studyPadding?: CSSProperties["padding"];
  rectangleDivLeft?: CSSProperties["left"];

  /** Action props */
  onLangoTextClick?: () => void;
};

const ContainerCard: FunctionComponent<ContainerCardType> = ({
  dimensionText,
  imageDimensionText,
  lineIconHeight,
  accountWidth,
  accountHeight,
  createWidth,
  createHeight,
  exploreLeft,
  explorePadding,
  studyLeft,
  studyPadding,
  rectangleDivLeft,
  onLangoTextClick,
}) => {
  const navbar1Style: CSSProperties = useMemo(() => {
    return {
      height: lineIconHeight,
    };
  }, [lineIconHeight]);

  const langoStyle: CSSProperties = useMemo(() => {
    return {
      width: accountWidth,
      height: accountHeight,
    };
  }, [accountWidth, accountHeight]);

  const myAccountStyle: CSSProperties = useMemo(() => {
    return {
      width: createWidth,
      height: createHeight,
    };
  }, [createWidth, createHeight]);

  const create1Style: CSSProperties = useMemo(() => {
    return {
      left: exploreLeft,
      padding: explorePadding,
    };
  }, [exploreLeft, explorePadding]);

  const explore1Style: CSSProperties = useMemo(() => {
    return {
      left: studyLeft,
      padding: studyPadding,
    };
  }, [studyLeft, studyPadding]);

  const study1Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft,
    };
  }, [rectangleDivLeft]);

  return (
    <div className={styles.navbar} style={navbar1Style}>
      <div
        className={styles.lango}
        onClick={onLangoTextClick}
        style={langoStyle}
      >
        Lango
      </div>
      <img className={styles.navbarChild} alt="" src="/line-1.svg" />
      <div className={styles.account}>
        <div className={styles.myAccount} style={myAccountStyle}>
          My Account
        </div>
        <img className={styles.dropDownArrow} alt="" src={dimensionText} />
      </div>
      <Link className={styles.create} to="/account-create" style={create1Style}>
        <div className={styles.create1}>Create</div>
      </Link>
      <Link
        className={styles.explore}
        to="/account-explore"
        style={explore1Style}
      >
        <div className={styles.create1}>Explore</div>
      </Link>
      <div className={styles.study} style={study1Style}>
        <div className={styles.study1}>Study</div>
        <div className={styles.studyChild} />
        <div className={styles.wrapperLine4}>
          <img
            className={styles.wrapperLine4Child}
            alt=""
            src={imageDimensionText}
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
