import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateLessonPlanFormContainer from "../components/CreateLessonPlanFormContainer";
import styles from "./CreateCollection.module.css";

const CreateCollection: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleLinkClick = useCallback(() => {
    navigate("/account-create");
  }, [navigate]);

  return (
    <div className={styles.createCollection}>
      <div className={styles.navbarParent}>
        <div className={styles.navbar}>
          <div className={styles.lango}>Lango</div>
          <img className={styles.navbarChild} alt="" src="/line-1.svg" />
          <div className={styles.account}>
            <div className={styles.myAccount}>My Account</div>
            <img
              className={styles.dropDownArrow}
              alt=""
              src="/drop-down-arrow2.svg"
            />
          </div>
        </div>
        <div className={styles.wrapperCreator}>
          <img className={styles.creatorIcon} alt="" src="/creator21@2x.png" />
        </div>
        <div className={styles.create}>
          <div className={styles.create1}>Create</div>
          <div className={styles.wrapperLine4}>
            <img
              className={styles.wrapperLine4Child}
              alt=""
              src="/line-4.svg"
            />
          </div>
          <div className={styles.createChild} />
        </div>
        <div className={styles.study}>
          <div className={styles.study1}>Study</div>
        </div>
        <b className={styles.yourCollections}>Your Collections</b>
        <b className={styles.drafts}>Drafts</b>
        <img className={styles.book1Icon} alt="" src="/book-121@2x.png" />
        <div className={styles.collection}>
          <div className={styles.collectionChild} />
          <div className={styles.titleOfCollection}>Title of Collection</div>
          <div className={styles.spanish}>Spanish</div>
          <div className={styles.creatorName}>Creator: Name</div>
          <div className={styles.description}>Description ...........</div>
          <img className={styles.editIcon} alt="" src="/edit11@2x.png" />
          <img className={styles.delete1Icon} alt="" src="/delete-111@2x.png" />
        </div>
        <div className={styles.div}>+</div>
        <img
          className={styles.blueprint1Icon}
          alt=""
          src="/blueprint-111@2x.png"
        />
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.seeAll}>{`See all >`}</div>
        <div className={styles.explore}>
          <div className={styles.study1}>Explore</div>
        </div>
        <div className={styles.collectionParent}>
          <div className={styles.collection1}>
            <div className={styles.collectionItem} />
          </div>
          <CreateLessonPlanFormContainer />
          <Link
            className={styles.frameInner}
            to="/account-create"
            onClick={onRectangleLinkClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateCollection;
