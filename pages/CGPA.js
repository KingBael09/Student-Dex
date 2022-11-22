import React from "react";
import styles from "../styles/CGPA.module.css";
import Head from "next/head";
import { useUserInfo } from "../context/userState";
import { useUserData } from "../Context/dataHolder";

import Router from "next/router";
import { useState } from "react";

// ! Work in Progress

const CGPA = () => {
  const [session, setsession] = useUserInfo();
  const [Logged, setLogged] = useUserData();
  const [state, setState] = useState(1);
  const [selSem, setSelSem] = useState("");
  console.log(Logged);

  const giveSubjects = () => {
    return (
      <div>
        <div>LMAO</div>
      </div>
    );
  };

  const courseSel = () => {
    const branch = Logged.Branch;
    // GET branch json for subject

    // fetch("")
  };

  if (session === "waiting") {
    if (typeof window != "undefined") {
      Router.push("/");
      return;
    }
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>CGPA Calculator</title>
        </Head>
        <div className={styles.wrap}>
          <div className={styles.heading}>
            <div className={styles.big}>CGPA Calculator</div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.selector}>
              <div className={styles.lable}>Select Semester</div>
              <div className={styles.select}>
                <select
                  name="semester"
                  value={selSem}
                  onChange={(e) => {
                    setSelSem(e.target.value);
                  }}
                >
                  <option value={""} disabled hidden>
                    ------------------------------Select------------------------------
                  </option>
                  <option value="I">I&#x02E2;&#x1D57; Semester</option>
                  <option value="II">II&#x207F;&#x1D48; Semester</option>
                  <option value="III">III&#x02B3;&#x1D48; Semester</option>
                  <option value="IV">IV&#x1D57;&#x02B0; Semester</option>
                  <option value="V">V&#x1D57;&#x02B0; Semester</option>
                  <option value="VI">VI&#x1D57;&#x02B0; Semester</option>
                  <option value="VII">VII&#x1D57;&#x02B0; Semester</option>
                  <option value="VIII">VIII&#x1D57;&#x02B0; Semester</option>
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <div className={styles.contentSection}>{giveSubjects()}</div>
              <div className={styles.buttonContainer}>
                <button className={styles.button}>{"=>"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CGPA;
