import React, { useState } from "react";
import styles from "../styles/Extras.module.css";
import Link from "next/link";

const Extras = (props) => {
  const [totalStudent, settotalStudent] = useState(0);

  const getTotalStudent = async () => {
    let sendReq = await fetch("http://127.0.0.1:1000/countusers");
    let resData = await sendReq.json();

    const noStudent = resData.totalCount;
    settotalStudent(noStudent);
  };
  const parameter = props.data;

  getTotalStudent();

  if (parameter === undefined) {
    return (
      <div className={styles.loading}>
        <span className={styles.loadingAnimation}></span>{" "}
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.altValue}>
            <span>{parameter.Branch}</span>
          </div>
        </div>
        {parameter.CSEM === "" ? (
          <Link href={"/details"}>
            <button
              className={[styles.cardContainer, styles.tempButton].join(" ")}
            >
              <div className={styles.cardName}>
                <div>Current</div> <div>Semester</div>
              </div>
              <span className={styles.colon}>:</span>
              <div className={styles.cardValue}>
                <span>{"--"}</span>
              </div>
            </button>
          </Link>
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
        {parameter.CGPA === "" ? (
          <Link href={"/details"}>
            <button
              className={[
                styles.cardContainer,
                styles.alt,
                styles.tempButton,
              ].join(" ")}
            >
              <div className={styles.cardName}>CGPA</div>
              <span className={styles.colon}>:</span>
              <div className={styles.cardValue}>
                <span>{"--"}</span>
              </div>
            </button>
          </Link>
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
  }
};

export default Extras;
