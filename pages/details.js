import React, { useState } from "react";
import styles from "../styles/Details.module.css";
import Head from "next/head";
import { useUserInfo } from "../context/userState";
import { useUserData } from "../Context/dataHolder";
import { AiOutlineUser, AiFillEdit } from "react-icons/ai";

import Router from "next/router";

const Details = () => {
  const [session, setsession] = useUserInfo();
  const [Logged, setLogged] = useUserData();
  const [edit, setedit] = useState("false");
  const [warning, setWarning] = useState("false");
  const parameter = Logged;

  const postReq = () => {
    console.log("Request Must be Post");
  };

  const displayWarning = () => {
    if (warning === "true") {
      return (
        <div className={styles.confirmContainer}>
          <div className={styles.box}>
            <div className={styles.msg}>
              Are You Sure You Want to Continue
              <span className={styles.qMark}>?</span>
            </div>
            <div className={styles.options}>
              <button
                onClick={() => {
                  postReq();
                  setWarning("false");
                  setedit("false");
                }}
                className={[styles.button, styles.yes].join(" ")}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setedit("false");
                  setWarning(false);
                }}
                className={[styles.button, styles.no].join(" ")}
              >
                No
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  const submitHandle = () => {
    setedit("true");
  };

  const handlePrev = () => {
    setedit("false");
  };

  const handleEdit = () => {
    setWarning("true");
  };

  const formSelection = () => {
    if (edit === "false") {
      return (
        <>
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
            <div>
              {parameter.Category === "N/A" ? (
                <div className={styles.failError}>Not Available</div>
              ) : (
                parameter.Category
              )}
            </div>
          </div>
          <div className={styles.infoParams}>
            <div>City</div>
            <span>:</span>
            <div>
              {parameter.City === "N/A" ? (
                <div className={styles.failError}>Not Available</div>
              ) : (
                parameter.City
              )}
            </div>
          </div>
          <div className={styles.infoParams}>
            <div>Nationality</div>
            <span>:</span>
            <div>
              {parameter.Nationality === "N/A" ? (
                <div className={styles.failError}>Not Available</div>
              ) : (
                parameter.Nationality
              )}
            </div>
          </div>
          <div className={styles.infoParams}>
            <div>Handicap</div>
            <span>:</span>
            <div>{parameter.PhysicalHandicap}</div>
          </div>
          <div className={styles.infoParams}>
            <div>Religion</div>
            <span>:</span>
            <div>
              {parameter.Religion === "N/A" ? (
                <div className={styles.failError}>Not Available</div>
              ) : (
                parameter.Religion
              )}
            </div>
          </div>
          <div className={styles.infoParams}>
            <div>Address</div>
            <span>:</span>
            <div className={styles.address}>
              {parameter.Address === "Not Updated" ? (
                <div className={styles.failError}>Not Available</div>
              ) : (
                parameter.Address
              )}
            </div>
          </div>

          <div className={styles.infoParams}>
            <div>Attendance</div>
            <span>:</span>
            <div>
              {parameter.Attendance === "N/A" ? (
                <div className={styles.failError}>Not Available</div>
              ) : (
                parameter.Attendance
              )}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
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
            <select
              name="branch"
              className={[styles.input, styles.select].join(" ")}
              // value={Branch}
              // onChange={(event) => setBranch(event.target.value)}
              // value={Branch}
            >
              <option value={"NA"} selected disabled hidden>
                ------------------------------Select------------------------------
              </option>
              <option value={"Open"}>Open</option>
              <option value={"SC"}>SC</option>
              <option value={"ST"}>ST</option>
              <option value={"OBS"}>OBS</option>
            </select>
          </div>
          <div className={styles.infoParams}>
            <div>City</div>
            <span>:</span>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.infoParams}>
            <div>Nationality</div>
            <span>:</span>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.infoParams}>
            <div>Handicap</div>
            <span>:</span>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.infoParams}>
            <div>Religion</div>
            <span>:</span>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.infoParams}>
            <div>Address</div>
            <span>:</span>
            <input className={styles.input} type="text" />
          </div>

          <div className={styles.infoParams}>
            <div>Attendance</div>
            <span>:</span>
            <div>
              {parameter.Attendance === "N/A" ? (
                <div className={styles.failError}>Not Available</div>
              ) : (
                parameter.Attendance
              )}
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => {
                handlePrev();
              }}
              className={[styles.button, styles.first].join(" ")}
            >
              Back
            </button>
            <button
              onClick={() => {
                handleEdit();
              }}
              className={[styles.button, styles.second].join(" ")}
            >
              Submit
            </button>
          </div>
        </>
      );
    }
  };

  if (session === "waiting") {
    if (typeof window != "undefined") {
      Router.push("/");
      return;
    }
  } else {
    return (
      <>
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
                    <div>
                      {parameter.FName} {parameter.LName}
                    </div>
                  </div>
                  <div className={[styles.info, styles.RollNo].join(" ")}>
                    <div>{parameter.RollNo}</div>
                  </div>
                  <div className={[styles.info, styles.Gender].join(" ")}>
                    <div>{parameter.Gender}</div>
                  </div>
                  <div className={styles.badges}>
                    <div className={styles.branchBlock}>{parameter.Branch}</div>
                    <div className={styles.cgpaBlock}>{parameter.CGPA}</div>
                    <div className={styles.csemBlock}>{parameter.CSEM}</div>
                  </div>
                </div>
              </div>
              <div className={styles.generalSection}>
                <div className={styles.generalWrapper}>{formSelection()}</div>
                {edit === "false" ? (
                  <button
                    onClick={() => {
                      submitHandle();
                    }}
                    className={styles.editButton}
                  >
                    <div className={styles.buttonContent}></div>
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
          {displayWarning()}
        </div>
      </>
    );
  }
};

export default Details;
