import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import ExploreContainer from "./ExploreContainer";
import LangoForm from "./LangoForm";
import styles from "./ContainerFrameLinks.module.css";

const ContainerFrameLinks: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-explore");
  }, [navigate]);

  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <ExploreContainer />
        <LangoForm onLangoTextClick={onLangoTextClick} />
      </div>
      <div className={styles.frame2}>
        <Link className={styles.study} to="/account-home">
          <div className={styles.study1}>Study</div>
        </Link>
        <Link className={styles.create} to="/account-create">
          <div className={styles.study1}>Create</div>
        </Link>
      </div>
    </div>
  );
};

export default ContainerFrameLinks;
