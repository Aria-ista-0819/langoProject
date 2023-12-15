import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import SectionForm1 from "../components/SectionForm1";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onExploreClick = useCallback(() => {
    navigate("/account-explore");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.homeChild} />
      <Header />
      <img
        className={styles.foreignlanguages1Icon}
        alt=""
        src="/foreignlanguages-1@2x.png"
      />
      <div className={styles.startLearningParent}>
        <button className={styles.startLearning}>
          <div
            className={styles.startLearningChild}
            onClick={onRectangle1Click}
          />
          <b className={styles.startLearning1}>{`Start Learning `}</b>
        </button>
        <button className={styles.explore} onClick={onExploreClick}>
          <div className={styles.exploreChild} />
          <b className={styles.explore1}>{`Explore `}</b>
          <b className={styles.noAccountNeeded}>No account needed</b>
        </button>
      </div>
      <div className={styles.learnANewLanguageWithLangParent}>
        <div className={styles.learnANew}>Learn a new language with Lango!</div>
        <div className={styles.createLessonPlans}>
          Create lesson plans. Learn new phrases. Practice at your own pace.
        </div>
      </div>
      <SectionForm1 />
      <div className={styles.thirdPage}>
        <div className={styles.groupParent}>
          <div className={styles.readyMadeModulesParent}>
            <div className={styles.readyMadeModules}>Ready made modules</div>
            <div className={styles.wantToDabble}>
              Want to dabble in another language but don’t have the time to
              create a lesson plan, try our public modules.
            </div>
          </div>
          <img
            className={styles.screenshot20231127At750Icon}
            alt=""
            src="/screenshot-20231127-at-750-2@2x.png"
          />
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.learnWhatMattersParent}>
            <div className={styles.learnWhatMatters}>Learn what matters</div>
            <div className={styles.pickAndChoose}>
              Pick and choose so you can spend more time on the phrases you
              actually want to learn.
            </div>
          </div>
          <img
            className={styles.screenshot20231127At749Icon}
            alt=""
            src="/screenshot-20231127-at-749-2@2x.png"
          />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.buildALessonPlanParent}>
            <div className={styles.buildALesson}>Build a lesson plan</div>
            <div className={styles.weAllowYou}>
              We allow you to build your own lessons or sets for yourself or
              maybe for others as well that are completely customizable.
            </div>
          </div>
          <img
            className={styles.screenshot20231129At840Icon}
            alt=""
            src="/screenshot-20231129-at-840-2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
