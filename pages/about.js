import React from "react";
import styles from "../styles/About.module.css";
import Head from "next/head";
import { AiFillGithub } from "react-icons/ai";
import { useUserInfo } from "../context/userState";
import Router from "next/router";

const About = () => {
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
          <title>About</title>
        </Head>
        <div className={styles.wrap}>
          <div className={styles.heading}>
            Ab<span className={styles.alt}>out</span>
          </div>
          <div className={styles.info}>
            <span className={styles.intAlt}>Student-DEX</span> is a Management
            Information Software for Student database Management with various
            features such as CGPA Calculation, Unified Notice Board, Attendance
            Access, Course Registration along with Notes and Syllabus access at
            one place.
          </div>
          <a
            href="https://github.com/KingBael09/Student-Dex"
            target={"_blank"}
            rel="noreferrer"
            className={styles.git}
          >
            {AiFillGithub()}
          </a>
        </div>
      </div>
    );
  }
};

export default About;
