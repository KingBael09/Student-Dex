import React from "react";
import styles from "../styles/Register.module.css";
import Head from "next/head";
import Router from "next/router";

import { useUserInfo } from "../context/userState";

// Assuming This Code is coming from backend


const CourseDetail = () => {
  const [session, setsession] = useUserInfo();

  const data = {
    RollNo: session.RollNo,
    cs3001: "true",
    cs3002: "true",
    cs3003: "true",
    cs3004: "true",
    cs3005: "true",
    cs3006: "true",
    cs3007: "true",
    cs3008: "true",
    cs3009: "true",
  };

  const postData = async () => {
    let stuData = await fetch("http://127.0.0.1:1000/registercourse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let secData = await stuData.json();
    console.log(secData);
    if (secData === "false") {
      alert("Contact Admin");
    } else {
      alert("Your Response has beeen Submitted");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
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
          <title>Registration</title>
        </Head>

        <div className={styles.warp}>
          <div className={styles.heading}>
            <div>Course Registration</div>
          </div>
          <div className={styles.content}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inpField}>
                <label htmlFor="CS3001">Operating System :</label>
                <input checked type="checkbox" />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3002">Design & Analysis of Algorithm :</label>
                <input checked type="checkbox" />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3003">Data Mining & Data Warehousing :</label>
                <input checked type="checkbox" />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3004">Software Engineering :</label>
                <input checked type="checkbox" />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3005">Theory of Computation :</label>
                <input checked type="checkbox" />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3006">
                  LAB Data Mining & Data Warehousing :
                </label>
                <input checked type="checkbox" />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3007">LAB Operating System :</label>
                <input checked type="checkbox" />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3008">
                  LAB Design & Analysis of Algorithm :
                </label>
                <input checked type="checkbox" />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3009">Mini Project :</label>
                <input checked type="checkbox" />
              </div>
              <div className={styles.button}>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default CourseDetail;
