import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LangoForm2.module.css";

type LangoForm2Type = {
  /** Style props */
  langoPosition?: CSSProperties["position"];
  langoTop?: CSSProperties["top"];
  langoLeft?: CSSProperties["left"];

  /** Action props */
  onFrameClick?: () => void;
};

const LangoForm2: FunctionComponent<LangoForm2Type> = ({
  langoPosition,
  langoTop,
  langoLeft,
  onFrameClick,
}) => {
  const navbarStyle: CSSProperties = useMemo(() => {
    return {
      position: langoPosition,
      top: langoTop,
      left: langoLeft,
    };
  }, [langoPosition, langoTop, langoLeft]);

  return (
    <div className={styles.navbar} style={navbarStyle}>
      <button className={styles.frame} onClick={onFrameClick}>
        <div className={styles.lango}>Lango</div>
      </button>
      <img className={styles.navbarChild} alt="" src="/line-1.svg" />
    </div>
  );
};

export default LangoForm2;
