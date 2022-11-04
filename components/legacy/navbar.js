import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navItem}>
        <Link href={"/"}>
          <div className={styles.heading}>
            <span>Home</span>
          </div>
        </Link>
      </div>
      <div className={styles.navItem}>
        <div className={styles.heading}>
          <span>Student</span>
        </div>
        <div className={styles.pList}>
          <div className={styles.listItem}>
            <span>Course Registration</span>
          </div>
          <div className={styles.listItem}>
            <span>Student Details</span>
          </div>
          <div className={styles.listItem}>
            <span>Admissions</span>
          </div>
        </div>
      </div>
      <div className={styles.navItem}>
        <div className={styles.heading}>
          <span>Academics</span>
        </div>
        <div className={styles.pList}>
          <div className={styles.listItem}>
            <span>CGPA</span>
          </div>
          <div className={styles.listItem}>
            <span>Notes</span>
          </div>
          <div className={styles.listItem}>
            <span>Syllabus</span>
          </div>
        </div>
      </div>
      <div className={styles.navItem}>
        <div className={styles.heading}>
          <span>Attendance</span>
        </div>
      </div>
      <div className={styles.navItem}>
        <div className={styles.heading}>
          <span>About</span>
        </div>
      </div>
    </div>
  );
};

export default navbar;
