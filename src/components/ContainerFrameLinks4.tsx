import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContainerFrameLinks4.module.css";

const ContainerFrameLinks4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/create-collection");
  }, [navigate]);

  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <b className={styles.yourCreations}>Your Creations</b>
        <img className={styles.book1Icon} alt="" src="/book-111@2x.png" />
        <div className={styles.div} onClick={onTextClick}>
          +
        </div>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default ContainerFrameLinks4;
