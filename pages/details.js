import React, { useState } from "react";
import styles from "../styles/Details.module.css";
import Head from "next/head";
import { useUserInfo } from "../context/userState";

import Router from "next/router";

const Details = () => {
  const [session, setsession] = useUserInfo();

  if (session === "waiting") {
    if (typeof window != "undefined") {
      Router.push("/");
      return;
    }
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>Details</title>
        </Head>

        <div className={styles.wrap}>
          <div>
            <div className={styles.staticDetail}>Lmao</div>
          </div>
          <div className={styles.dynamicDetail}>Lmao</div>
        </div>
      </div>
    );
  }
  //   console.log(session);
};

export default Details;

// ?Add Functionality
// Address
// CGPA
// CSEM
// Category
// City
// Nationality
// Handicap Status
// Religion
// Attendance
