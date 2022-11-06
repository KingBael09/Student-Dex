import React, { useState } from "react";
import styles from "../styles/Extras.module.css";
const Extras = () => {
  const [totalStudent, settotalStudent] = useState(0);

  const getTotalStudent = async () => {
    let sendReq = await fetch("http://localhost:3000/api/total");
    let resData = await sendReq.json();

    const noStudent = resData.total;
    settotalStudent(noStudent);
    // console.log(totalStudent);
  };

  getTotalStudent();
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.cardName}>
          <div>Current</div> <div>Semister</div>
        </div>
        <span className={styles.colon}>:</span>
        <div className={styles.cardValue}>
          <span>V</span>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardName}>CGPA</div>
        <span className={styles.colon}>:</span>
        <div className={styles.cardValue}>
          <span>9</span>
        </div>
      </div>
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
