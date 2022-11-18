import React, { useState } from "react";
import styles from "../styles/Extras.module.css";
import Link from "next/link";

const Extras = (props) => {
  const [totalStudent, settotalStudent] = useState(0);

  const getTotalStudent = async () => {
    let sendReq = await fetch("http://localhost:3000/api/total");
    let resData = await sendReq.json();

    const noStudent = resData.total;
    settotalStudent(noStudent);
  };
  const parameter = props.localData;

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
    if (parameter.LMAO === undefined) {
      parameter.LMAO = "Damn";
    }
    if (parameter.Address === undefined) {
      parameter.Address = "Not Updated";
    }
    if (parameter.Category === undefined) {
      parameter.Category = "N/A";
    }
    if (parameter.City === undefined) {
      parameter.City = "N/A";
    }
    if (parameter.Nationality === undefined) {
      parameter.Nationality = "N/A";
    }
    if (parameter.PhysicalHandicap === undefined) {
      parameter.PhysicalHandicap = "N/A";
    }
    if (parameter.Religion === undefined) {
      parameter.Religion = "N/A";
    }
    if (parameter.Attendance === undefined) {
      parameter.Attendance = "N/A";
    }
  };

  getTotalStudent();
  shiftData();

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.altValue}>
          <span>{parameter.Branch}</span>
        </div>
      </div>

      {parameter.CSEM === "N/A" ? (
        <Link href={"/details"}>
          <button
            className={[styles.cardContainer, styles.tempButton].join(" ")}
          >
            <div className={styles.cardName}>
              <div>Current</div> <div>Semister</div>
            </div>
            <span className={styles.colon}>:</span>
            <div className={styles.cardValue}>
              <span>{parameter.CSEM}</span>
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

      {parameter.CGPA === "N/A" ? (
        <Link href={'/details'}>
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
              <span>{parameter.CGPA}</span>
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
};

export default Extras;
