import React, { useState } from "react";
import styles from "../styles/Details.module.css";
import Head from "next/head";
import { useUserInfo } from "../context/userState";
import { useUserData } from "../Context/dataHolder";
import { AiOutlineUser } from "react-icons/ai";

import Router from "next/router";

const Details = () => {
  const [session, setsession] = useUserInfo();
  const [Logged, setLogged] = useUserData();

  const parameter = Logged;

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
          <div className={styles.heading}>
            <div className={styles.big}>Student Details</div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.stickySection}>
              <div className={styles.secondaryWrapper}>
                <div className={styles.profile}>
                  <div className={styles.img}>
                    <AiOutlineUser />
                  </div>
                </div>
                <div className={[styles.info, styles.Name].join(" ")}>
                  {/* <div>Name</div> */}
                  <div>
                    {parameter.FName} {parameter.LName}
                  </div>
                </div>
                <div className={[styles.info, styles.RollNo].join(" ")}>
                  {/* <div>RollNo</div> */}
                  <div>{parameter.RollNo}</div>
                </div>
                <div className={[styles.info, styles.Gender].join(" ")}>
                  {/* <div>Gender</div> */}
                  <div>{parameter.Gender}</div>
                </div>
                <div className={styles.badges}>
                  <div>{parameter.Branch}</div>
                  <div>{parameter.CGPA}</div>
                  <div>{parameter.CSEM}</div>
                </div>
              </div>
            </div>
            <div className={styles.generalSection}>
              <div className={styles.generalWrapper}>
                <div className={styles.infoParams}>
                  <div>D.O.B</div>
                  <span>:</span>
                  <div>{parameter.DOB}</div>
                </div>
                <div className={styles.infoParams}>
                  <div>Mail</div>
                  <span>:</span>
                  <div>{parameter.Mail}</div>
                </div>
                <div className={styles.infoParams}>
                  <div>Phone</div>
                  <span>:</span>
                  <div>{parameter.Phone}</div>
                </div>
                <div className={styles.infoParams}>
                  <div>Admission Date</div>
                  <span>:</span>
                  <div>{parameter.AdmissionData}</div>
                </div>
                <div className={styles.infoParams}>
                  <div>Category</div>
                  <span>:</span>
                  <div>{parameter.Category}</div>
                </div>
                <div className={styles.infoParams}>
                  <div>City</div>
                  <span>:</span>
                  <div>{parameter.City}</div>
                </div>
                <div className={styles.infoParams}>
                  <div>Nationality</div>
                  <span>:</span>
                  <div>{parameter.Nationality}</div>
                </div>
                <div className={styles.infoParams}>
                  <div>Handicap</div>
                  <span>:</span>
                  <div>{parameter.PhysicalHandicap}</div>
                </div>
                <div className={styles.infoParams}>
                  <div>Religion</div>
                  <span>:</span>
                  <div>{parameter.Religion}</div>
                </div>
                <div className={styles.infoParams}>
                  <div>Address</div>
                  <span>:</span>
                  <div className={styles.address}>{parameter.Address}</div>
                </div>

                <div className={styles.infoParams}>
                  <div>Attendance</div>
                  <span>:</span>
                  <div>{parameter.Nationality}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
