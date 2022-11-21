import React from "react";
import styles from "../styles/Course.module.css";
import Head from "next/head";

// Assuming This Code is coming from backend
const csem = "VI";

const semSelector = () => {
  if (csem == "I") {
    return <div>Coming Soon</div>;
  }
  if (csem == "II") {
    return <div>Coming Soon</div>;
  }
  if (csem == "III") {
    return <div>Coming Soon</div>;
  }
  if (csem == "IV") {
    return <div>Coming Soon</div>;
  }
  if (csem == "V") {
    return <div>Coming Soon</div>;
  }
  if (csem == "VI") {
    return (
      <div>
        <div>Coming Soon!</div>
      </div>
    );
  }
  if (csem == "VII") {
    return <div>Coming Soon</div>;
  }
  if (csem == "VIII") {
    return <div>Coming Soon</div>;
  }
};

const CourseDetail = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Registration</title>
      </Head>
      <div className={styles.wrap}>
        <div className={styles.heading}>Course Registration</div>
        <div className={styles.content}>{semSelector()}</div>
      </div>
    </div>
  );
};

export default CourseDetail;
