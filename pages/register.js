import React from "react";
import styles from "../styles/Register.module.css";
import Head from "next/head";
import Router from "next/router";

import { useUserInfo } from "../context/userState";

// Assuming This Code is coming from backend
const csem = "VI";

const CourseDetail = () => {
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
          <title>Registration</title>
        </Head>
        <div className={styles.comingSoon}>
          <div>
            Coming Soon<span className={styles.exc}>!</span>
          </div>
        </div>
      </div>
    );
  }
};

export default CourseDetail;
