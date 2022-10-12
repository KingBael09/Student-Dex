import React, { useState, useEffect } from "react";
import styles from "../styles/Pannel.module.css";
import Link from "next/link";
import {
  AiOutlineInfoCircle,
  AiOutlineUser,
  AiOutlineHome,
} from "react-icons/ai";

import { RiCalendarCheckLine } from "react-icons/ri";
import { ImBooks } from "react-icons/im";

const Pannel = () => {
  // TODO: add global state to switch between home page blur on pannel hover

  // const [over, setover] = useState(false);

  // function OverMouse(e) {
  //   console.log(e);
  //   setover(true);
  //   console.log(setover);
  // }

  // function LeaveMouse(e) {
  //   console.log(e);
  //   setover(false);
  //   console.log(setover);
  // }

  return (
    <nav
      className={styles.navBody}
      // onMouseEnter={OverMouse}
      // onMouseLeave={LeaveMouse}
    >
      <div className={styles.navItem}>
        <Link href={"/"}>
          <div className={styles.heading}>
            <div>
              <AiOutlineHome />
            </div>
            {/* Home */}
            <div className={styles.linkName}>Home</div>
          </div>
        </Link>
      </div>
      <div className={styles.navItem}>
        <div className={styles.heading}>
          <div>
            <AiOutlineUser />
          </div>
          {/* Student */}
          <div className={styles.linkName}>Student</div>
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
          <div>
            <ImBooks />
          </div>
          <div className={styles.linkName}>Academics</div>
          {/* Academics */}
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
          {/* Attendance */}
        </div>
      </div>
      <div className={styles.navItem}>
        <div className={styles.heading}>
          <div>
            <AiOutlineInfoCircle />
          </div>
          {/* About */}
          <div className={styles.linkName}>About</div>
        </div>
      </div>
    </nav>
  );
};

export default Pannel;
