import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContainerSidebarButtons.module.css";

type ContainerSidebarButtonsType = {
  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propBackgroundImage?: CSSProperties["backgroundImage"];

  /** Action props */
  onClose1Click?: () => void;
  onRectangle5Click?: () => void;
};

const ContainerSidebarButtons: FunctionComponent<
  ContainerSidebarButtonsType
> = ({
  propLeft,
  propWidth,
  propBackgroundImage,
  onClose1Click,
  onRectangle5Click,
}) => {
  const sideBarStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const close1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.sideBar} style={sideBarStyle}>
      <div className={styles.sideBarChild} />
      <button
        className={styles.close1}
        onClick={onClose1Click}
        style={close1Style}
      />
      <button className={styles.one}>
        <div className={styles.oneChild} />
        <div className={styles.one1}>one</div>
      </button>
      <button className={styles.two}>
        <div className={styles.twoChild} onClick={onRectangle5Click} />
        <div className={styles.one1}>two</div>
      </button>
      <div className={styles.three}>
        <div className={styles.threeChild} />
        <div className={styles.four}>three</div>
      </div>
      <div className={styles.three2}>
        <div className={styles.threeChild} />
        <div className={styles.four}>four</div>
      </div>
      <div className={styles.three3}>
        <div className={styles.threeChild} />
        <div className={styles.four}>five</div>
      </div>
      <div className={styles.three4}>
        <div className={styles.threeChild} />
        <div className={styles.four}>six</div>
      </div>
      <div className={styles.three5}>
        <div className={styles.threeChild} />
        <div className={styles.four}>seven</div>
      </div>
      <div className={styles.three6}>
        <div className={styles.threeChild} />
        <div className={styles.four}>eight</div>
      </div>
      <div className={styles.three7}>
        <div className={styles.threeChild} />
        <div className={styles.nine}>nine</div>
      </div>
      <div className={styles.three8}>
        <div className={styles.threeChild} />
        <div className={styles.four}>ten</div>
      </div>
    </div>
  );
};

export default ContainerSidebarButtons;
