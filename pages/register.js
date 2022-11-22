import React from "react";
import styles from "../styles/Course.module.css";
import Head from "next/head";

// Assuming This Code is coming from backend
const csem = "VI";

const CourseDetail = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Registration</title>
      </Head>
      <div className={styles.wrap}>
        <div className={styles.heading}>Course Registration</div>
        <div className={styles.content}>LMAO</div>
      </div>
    </div>
  );
};

export default CourseDetail;
