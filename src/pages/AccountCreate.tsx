import { FunctionComponent } from "react";
import ContainerFrameLinks3 from "../components/ContainerFrameLinks3";
import ContainerFrameLinks4 from "../components/ContainerFrameLinks4";
import TitleContainer from "../components/TitleContainer";
import styles from "./AccountCreate.module.css";

const AccountCreate: FunctionComponent = () => {
  return (
    <div className={styles.accountCreate}>
      <div className={styles.frameParent}>
        <ContainerFrameLinks3 />
        <ContainerFrameLinks4 />
        <TitleContainer />
        <div className={styles.frame}>
          <div className={styles.seeAll}>{`See all >`}</div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <b className={styles.drafts}>Drafts</b>
            <img
              className={styles.blueprint1Icon}
              alt=""
              src="/blueprint-1@2x.png"
            />
            <div className={styles.frameChild} />
          </div>
        </div>
        <div className={styles.frame3}>
          <img className={styles.creatorIcon} alt="" src="/creator2@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default AccountCreate;
