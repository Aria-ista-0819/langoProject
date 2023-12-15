import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerFrameLinks from "../components/ContainerFrameLinks";
import styles from "./JoinGroups.module.css";

const JoinGroups: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLangoTextClick = useCallback(() => {
    navigate("/account-explore");
  }, [navigate]);

  const onFrameClick = useCallback(() => {
    navigate("/account-explore");
  }, [navigate]);

  return (
    <div className={styles.joinGroups}>
      <div className={styles.frameParent}>
        <ContainerFrameLinks />
        <div className={styles.frame}>
          <div className={styles.frame1}>
            <div className={styles.frame2}>
              <div className={styles.frame3}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.frame4}>
                <img className={styles.user1Icon} alt="" src="/user-1@2x.png" />
              </div>
              <div className={styles.frame5}>
                <div className={styles.searchBox}>
                  <img
                    className={styles.search11}
                    alt=""
                    src="/search-1-1@2x.png"
                  />
                  <div className={styles.searchGroupsPeople}>
                    Search Groups, People
                  </div>
                </div>
              </div>
              <div className={styles.frame6}>
                <b className={styles.jessicaGiloy}>Jessica Giloy</b>
              </div>
            </div>
            <div className={styles.frame7}>
              <div className={styles.frame3}>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.frame9}>
                <div className={styles.frameInner} />
              </div>
              <div className={styles.frame10}>
                <b className={styles.beginnerLearners}>Beginner Learners</b>
              </div>
              <div className={styles.frame11}>
                <img
                  className={styles.group2Icon}
                  alt=""
                  src="/group-2@2x.png"
                />
              </div>
              <button className={styles.frame12} onClick={onFrameClick}>
                <div className={styles.back}>
                  <div className={styles.back1}>Back</div>
                </div>
              </button>
              <div className={styles.frame13}>
                <div className={styles.beginnerLearners}>5 Members</div>
              </div>
            </div>
          </div>
          <div className={styles.frame14}>
            <div className={styles.lineDiv} />
            <div className={styles.frameChild1} />
            <div className={styles.frame15}>
              <img className={styles.user1Icon} alt="" src="/group-1@2x.png" />
              <div className={styles.beginnerLearnersParent}>
                <b className={styles.beginnerLearners1}>Beginner Learners</b>
                <div className={styles.members1}>5 Members</div>
              </div>
            </div>
            <div className={styles.typeMessage}>
              <div className={styles.typeMessageHere}>
                Type message here ...
              </div>
            </div>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group81@2x.png"
            />
            <img
              className={styles.maskGroupIcon1}
              alt=""
              src="/mask-group91@2x.png"
            />
            <img
              className={styles.maskGroupIcon2}
              alt=""
              src="/mask-group101@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinGroups;
