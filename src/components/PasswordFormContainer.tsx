import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PasswordFormContainer.module.css";

type PasswordFormContainerType = {
  newPassword?: string;

  /** Style props */
  propJustifyContent?: CSSProperties["justifyContent"];
  propPadding?: CSSProperties["padding"];
};

const PasswordFormContainer: FunctionComponent<PasswordFormContainerType> = ({
  newPassword,
  propJustifyContent,
  propPadding,
}) => {
  const emailStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
      padding: propPadding,
    };
  }, [propJustifyContent, propPadding]);

  return (
    <div className={styles.emailParent}>
      <div className={styles.email} style={emailStyle}>
        <div className={styles.newPassword}>{newPassword}</div>
      </div>
      <img className={styles.hiddenIcon} alt="" src="/hidden@2x.png" />
    </div>
  );
};

export default PasswordFormContainer;
