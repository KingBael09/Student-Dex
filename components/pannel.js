import React from "react";
import styles from "../styles/Pannel.module.css";
import Link from "next/link";
import {
  AiOutlineInfoCircle,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineLogout,
} from "react-icons/ai";

import { RiCalendarCheckLine, RiArrowDownSLine } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { useUserInfo } from "../context/userState";

const Pannel = () => {
  // ?Done TODO: add global state to switch between home page blur on pannel hover
  const [session, setsession] = useUserInfo();
  const handleLogout = () => {
    setsession("waiting");
  };

  return (
    <>
      <nav className={styles.navBody}>
        <div className={styles.navItem}>
          <Link href={"/"}>
            <div className={styles.heading}>
              <div>
                <AiOutlineHome />
              </div>
              <div className={styles.linkName}>Home</div>
            </div>
          </Link>
        </div>
        <div className={styles.navItem}>
          <div className={styles.heading}>
            <div>
              <AiOutlineUser />
            </div>
            <div className={styles.linkName}>Student</div>
          </div>
          <div className={styles.pList}>
            <div className={styles.listItem}>
              <span>Course Registration</span>
            </div>
            <Link href={"/details"}>
              <div className={styles.listItem}>
                <span>Student Details</span>
              </div>
            </Link>
            <div className={styles.listItem}>
              <span>Admissions</span>
            </div>
          </div>
        </div>
        <div className={styles.navItem}>
          <div className={styles.heading}>
            <div>
              <ImBooks />
            </div>
            <div className={styles.linkName}>Academics</div>
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
            <div>
              <RiCalendarCheckLine />
            </div>
            <div className={styles.linkName}>Attendance</div>
          </div>
        </div>
        <div
          onClick={handleLogout}
          className={[styles.navItem, styles.logout].join(" ")}
        >
          <div className={styles.heading}>
            <div>
              <AiOutlineLogout />
            </div>
            <div className={styles.linkName}>Logout</div>
          </div>
        </div>
        <div className={styles.navItem}>
          <div className={styles.heading}>
            <div>
              <AiOutlineInfoCircle />
            </div>
            <div className={styles.linkName}>About</div>
          </div>
        </div>
      </nav>
      <div className={styles.blur}></div>
    </>
  );
};

export default Pannel;
