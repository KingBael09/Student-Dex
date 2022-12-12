import React, { useState } from "react";
import styles from "../styles/Register.module.css";
import Head from "next/head";
import Router from "next/router";

import { useUserInfo } from "../context/userState";

// Assuming This Code is coming from backend

const CourseDetail = () => {
  const [session, setsession] = useUserInfo();
  const [select, setselect] = useState({
    cs3001: false,
    cs3002: false,
    cs3003: false,
    cs3004: false,
    cs3005: false,
    cs3006: false,
    cs3007: false,
    cs3008: false,
    cs3009: false,
  });

  const data = {
    RollNo: session.RollNo,
    cs3001: select.cs3001 ? "true" : "false",
    cs3002: select.cs3002 ? "true" : "false",
    cs3003: select.cs3003 ? "true" : "false",
    cs3004: select.cs3004 ? "true" : "false",
    cs3005: select.cs3005 ? "true" : "false",
    cs3006: select.cs3006 ? "true" : "false",
    cs3007: select.cs3007 ? "true" : "false",
    cs3008: select.cs3008 ? "true" : "false",
    cs3009: select.cs3009 ? "true" : "false",
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
                <input
                  onChange={(e) => {
                    setselect((arr) => ({
                      ...arr,
                      cs3001: e.target.checked,
                    }));
                  }}
                  checked={select.cs3001}
                  type="checkbox"
                />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3002">Design & Analysis of Algorithm :</label>
                <input
                  onChange={(e) => {
                    setselect((arr) => ({
                      ...arr,
                      cs3002: e.target.checked,
                    }));
                  }}
                  checked={select.cs3002}
                  type="checkbox"
                />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3003">Data Mining & Data Warehousing :</label>
                <input
                  onChange={(e) => {
                    setselect((arr) => ({
                      ...arr,
                      cs3003: e.target.checked,
                    }));
                  }}
                  checked={select.cs3003}
                  type="checkbox"
                />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3004">Software Engineering :</label>
                <input
                  onChange={(e) => {
                    setselect((arr) => ({
                      ...arr,
                      cs3004: e.target.checked,
                    }));
                  }}
                  checked={select.cs3004}
                  type="checkbox"
                />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3005">Theory of Computation :</label>
                <input
                  onChange={(e) => {
                    setselect((arr) => ({
                      ...arr,
                      cs3005: e.target.checked,
                    }));
                  }}
                  checked={select.cs3005}
                  type="checkbox"
                />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3006">
                  LAB Data Mining & Data Warehousing :
                </label>
                <input
                  onChange={(e) => {
                    setselect((arr) => ({
                      ...arr,
                      cs3006: e.target.checked,
                    }));
                  }}
                  checked={select.cs3006}
                  type="checkbox"
                />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3007">LAB Operating System :</label>
                <input
                  onChange={(e) => {
                    setselect((arr) => ({
                      ...arr,
                      cs3007: e.target.checked,
                    }));
                  }}
                  checked={select.cs3007}
                  type="checkbox"
                />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3008">
                  LAB Design & Analysis of Algorithm :
                </label>
                <input
                  onChange={(e) => {
                    setselect((arr) => ({
                      ...arr,
                      cs3008: e.target.checked,
                    }));
                  }}
                  checked={select.cs3008}
                  type="checkbox"
                />
              </div>

              <div className={styles.inpField}>
                <label htmlFor="CS3009">Mini Project :</label>
                <input
                  onChange={(e) => {
                    setselect((arr) => ({
                      ...arr,
                      cs3009: e.target.checked,
                    }));
                  }}
                  checked={select.cs3009}
                  type="checkbox"
                />
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
