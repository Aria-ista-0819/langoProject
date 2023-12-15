import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import LangoForm from "./LangoForm";
import ExploreContainer from "./ExploreContainer";
import styles from "./ContainerFrameLinks2.module.css";

const ContainerFrameLinks2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  return (
    <div className={styles.frame}>
      <Link className={styles.create} to="/account-create">
        <div className={styles.create1}>Create</div>
      </Link>
      <div className={styles.frame1}>
        <Link className={styles.study} to="/account-home">
          <div className={styles.create1}>Study</div>
        </Link>
        <div className={styles.frame1}>
          <LangoForm onLangoTextClick={onLangoTextClick} />
          <ExploreContainer />
        </div>
      </div>
    </div>
  );
};

export default ContainerFrameLinks2;
