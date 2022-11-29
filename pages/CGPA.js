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
        {/* <div className={styles.comingSoon}>
          <div>
            Coming Soon<span className={styles.exc}>!</span>
          </div>
        </div> */}
      </div>
    );
  }
};

export default CGPA;
