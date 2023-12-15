import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import StudyContainer from "../components/StudyContainer";
import MultipleChoiceCard from "../components/MultipleChoiceCard";
import styles from "./ContinueLesson2.module.css";

const ContinueLesson2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-home");
  }, [navigate]);

  const onRectangleLinkClick = useCallback(() => {
    navigate("/continue-lesson");
  }, [navigate]);

  return (
    <div className={styles.continueLesson2}>
      <div className={styles.navbarParent}>
        <div className={styles.navbar}>
          <div className={styles.lango} onClick={onLangoTextClick}>
            Lango
          </div>
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
        <div className={styles.create}>
          <div className={styles.create1}>Create</div>
        </div>
        <div className={styles.explore}>
          <div className={styles.create1}>Explore</div>
        </div>
        <StudyContainer propFilter="blur(4px)" />
        <b className={styles.bienvenidos}>Bienvenidos</b>
        <img className={styles.frameChild} alt="" src="/line-1.svg" />
        <div className={styles.collection} />
        <div className={styles.collection1} />
        <div className={styles.collection2} />
        <div className={styles.wrapperStudent}>
          <img className={styles.studentIcon} alt="" src="/student21@2x.png" />
        </div>
        <div className={styles.beginnerNumbers}>
          Beginner - Numbers and alphabet
        </div>
        <div className={styles.elementaryGrammar}>Elementary - Grammar</div>
        <div className={styles.elementaryBasic}>
          Elementary - Basic Conversation
        </div>
        <div className={styles.getStartedWith}>
          Get started with learning the fundamentals of learning a language ...
        </div>
        <div className={styles.grammarIsAn}>
          Grammar is an important aspect for a beginner to grappel with ...
        </div>
        <div className={styles.learnSomeBasic}>
          Learn some basic expressions and vocabulary to get you started ...
        </div>
        <div className={styles.collectionParent}>
          <div className={styles.collection3} />
          <div className={styles.quiz}>{`Quiz `}</div>
          <img className={styles.frameItem} alt="" src="/arrow-111.svg" />
        </div>
        <div className={styles.collectionGroup}>
          <div className={styles.collection4} />
          <div className={styles.createYourOwn}>Create your own</div>
        </div>
        <div className={styles.collectionContainer}>
          <div className={styles.collection3} />
          <div className={styles.quiz}>{`Quiz `}</div>
          <img className={styles.frameItem} alt="" src="/arrow-111.svg" />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.collection3} />
          <div className={styles.quiz}>{`Quiz `}</div>
          <img className={styles.frameItem} alt="" src="/arrow-111.svg" />
        </div>
        <div className={styles.collectionParent1}>
          <div className={styles.collection7} />
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <img className={styles.lineIcon} alt="" src="/line-1.svg" />
            <b className={styles.whatDoYou}>
              What do you want to create today?
            </b>
            <b className={styles.createAQuiz}>Create a quiz</b>
            <Link
              className={styles.rectangleA}
              to="/continue-lesson"
              onClick={onRectangleLinkClick}
            />
            <button className={styles.frameButton}>
              <div className={styles.collection8}>
                <div className={styles.collectionChild} />
              </div>
              <div className={styles.vocabCards}>Vocab cards</div>
            </button>
            <MultipleChoiceCard
              audioOptions="Multiple "
              propTop="560.2px"
              propLeft="37.3px"
              propLeft1="calc(50% - 64.85px)"
              propWidth="129.7px"
            />
            <button className={styles.collectionParent2}>
              <div className={styles.collection9}>
                <div className={styles.collectionItem} />
              </div>
              <div className={styles.matching}>Matching</div>
            </button>
            <button className={styles.collectionParent3}>
              <div className={styles.collection9}>
                <div className={styles.collectionItem} />
              </div>
              <div className={styles.shortAnswer}>Short answer</div>
            </button>
            <MultipleChoiceCard
              audioOptions="Audio "
              propTop="175.3px"
              propLeft="429.5px"
              propLeft1="calc(50% - 72.15px)"
              propWidth="145.2px"
            />
            <button className={styles.collectionParent4}>
              <div className={styles.collection9}>
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.addImagevideo}>Add image/video</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueLesson2;
