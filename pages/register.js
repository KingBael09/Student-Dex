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
        
        <div className={styles.warp}>
          <div className={styles.heading}>Course Registration</div>
          <div className={styles.content}>
            
          </div>
        </div>
      </div>
    );
  }
};

export default CourseDetail;
