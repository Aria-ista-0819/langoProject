import { FunctionComponent } from "react";
import ContainerFrame from "../components/ContainerFrame";
import BeginnerNumbersFormContainer from "../components/BeginnerNumbersFormContainer";
import Footer from "../components/Footer";
import styles from "./ContinueLesson.module.css";

const ContinueLesson: FunctionComponent = () => {
  return (
    <div className={styles.continueLesson}>
      <div className={styles.frameParent}>
        <ContainerFrame />
        <div className={styles.frame}>
          <BeginnerNumbersFormContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContinueLesson;
