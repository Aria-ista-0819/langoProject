import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import styles from "./FormContainer1.module.css";

type FormContainer1Type = {
  dimension?: string;
  routePath: string;
  actionLabel?: string;
  componentId?: string;
  linkPath: string;
  buttonLabel?: string;

  /** Style props */
  accountWidth?: CSSProperties["width"];
  createWidth?: CSSProperties["width"];
  studyLeft?: CSSProperties["left"];
  studyPadding?: CSSProperties["padding"];
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];

  /** Action props */
  onLangoTextClick?: () => void;
};

const FormContainer1: FunctionComponent<FormContainer1Type> = ({
  dimension,
  routePath,
  actionLabel,
  componentId,
  linkPath,
  buttonLabel,
  accountWidth,
  createWidth,
  studyLeft,
  studyPadding,
  propLeft,
  propPadding,
  onLangoTextClick,
}) => {
  const lango1Style: CSSProperties = useMemo(() => {
    return {
      width: accountWidth,
    };
  }, [accountWidth]);

  const myAccount1Style: CSSProperties = useMemo(() => {
    return {
      width: createWidth,
    };
  }, [createWidth]);

  const create2Style: CSSProperties = useMemo(() => {
    return {
      left: studyLeft,
      padding: studyPadding,
    };
  }, [studyLeft, studyPadding]);

  const explore2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      padding: propPadding,
    };
  }, [propLeft, propPadding]);

  return (
    <div className={styles.navbar}>
      <div
        className={styles.lango}
        onClick={onLangoTextClick}
        style={lango1Style}
      >
        Lango
      </div>
      <img className={styles.navbarChild} alt="" src="/line-1.svg" />
      <div className={styles.account}>
        <div className={styles.myAccount} style={myAccount1Style}>
          My Account
        </div>
        <img className={styles.dropDownArrow} alt="" src={dimension} />
      </div>
      <Link className={styles.create} to={routePath} style={create2Style}>
        <div className={styles.create1}>{actionLabel}</div>
      </Link>
      <div className={styles.study}>
        <div className={styles.study1}>Study</div>
        <div className={styles.studyChild} />
        <div className={styles.wrapperLine4}>
          <img className={styles.wrapperLine4Child} alt="" src={componentId} />
        </div>
      </div>
      <Link className={styles.explore} to={linkPath} style={explore2Style}>
        <div className={styles.create1}>{buttonLabel}</div>
      </Link>
    </div>
  );
};

export default FormContainer1;
