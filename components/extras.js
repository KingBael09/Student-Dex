import React, { useState } from "react";
import styles from "../styles/Extras.module.css";
// import { useUserInfo } from "../Context/userState";

const Extras = (props) => {
  const [totalStudent, settotalStudent] = useState(0);

  const getTotalStudent = async () => {
    let sendReq = await fetch("http://localhost:3000/api/total");
    let resData = await sendReq.json();

    const noStudent = resData.total;
    settotalStudent(noStudent);
  };
  let parameter = props.data;

  const shiftData = () => {
    if (parameter === undefined) {
      parameter = {
        Branch: "N/A",
        CGPA: "N/A",
        CSEM: "N/A",
      };
      console.error("Internal Server Error!");
    }
    if (parameter.CGPA === undefined) {
      parameter.CGPA = "N/A";
    }
    if (parameter.CSEM === undefined) {
      parameter.CSEM = "N/A";
    }
  };

  getTotalStudent();
  shiftData();

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {/* <div className={styles.cardName}>Branch</div>
        <span className={styles.colon}>:</span> */}
        <div className={styles.altValue}>
          <span>{parameter.Branch}</span>
        </div>
      </div>

      {parameter.CSEM === "N/A" ? (
        <button className={[styles.cardContainer, styles.tempButton].join(" ")}>
          <div className={styles.cardName}>
            <div>Current</div> <div>Semister</div>
          </div>
          <span className={styles.colon}>:</span>
          <div className={styles.cardValue}>
            <span>{parameter.CSEM}</span>
          </div>
        </button>
      ) : (
        <div className={styles.cardContainer}>
          <div className={styles.cardName}>
            <div>Current</div> <div>Semister</div>
          </div>
          <span className={styles.colon}>:</span>
          <div className={styles.cardValue}>
            <span>{parameter.CSEM}</span>
          </div>
        </div>
      )}

      {parameter.CGPA === "N/A" ? (
        <button
          className={[styles.cardContainer, styles.alt, styles.tempButton].join(
            " "
          )}
        >
          <div className={styles.cardName}>CGPA</div>
          <span className={styles.colon}>:</span>
          <div className={styles.cardValue}>
            <span>{parameter.CGPA}</span>
          </div>
        </button>
      ) : (
        <div className={[styles.cardContainer, styles.alt].join(" ")}>
          <div className={styles.cardName}>CGPA</div>
          <span className={styles.colon}>:</span>
          <div className={styles.cardValue}>
            <span>{parameter.CGPA}</span>
          </div>
        </div>
      )}

      <div className={[styles.cardContainer, styles.special].join(" ")}>
        <div className={styles.cardName}>
          <div>Registered</div>
          <div>Students</div>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.cardValue}>
          <span>{totalStudent}</span>
        </div>
      </div>
    </div>
  );
};

export default Extras;
