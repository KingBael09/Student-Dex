import React, { useState } from "react";
import styles from "../styles/Details.module.css";
import Head from "next/head";
import { useUserInfo } from "../context/userState";
import { useUserData } from "../Context/dataHolder";
import { AiOutlineUser, AiFillEdit } from "react-icons/ai";

import Router from "next/router";

const Details = () => {
  const attendanceEditabel = true;

  const [session, setsession] = useUserInfo();
  const [Logged, setLogged] = useUserData();
  const [edit, setedit] = useState("false");
  const [warning, setWarning] = useState("false");
  const parameter = Logged;

  const [Category, setCategory] = useState(
    parameter.Category === "N/A" ? "" : parameter.Category
  );
  //! Needs Update
  const [City, setCity] = useState(parameter.City);
  const [Nationality, setNationality] = useState(parameter.Nationality);
  const [PhysicallyHandicap, setPhysicallyHandicap] = useState(
    parameter.PhysicallyHandicap
  );
  const [Religion, setReligion] = useState(parameter.Religion);
  const [Address, setAddress] = useState(parameter.Address);
  const [CSEM, setCSEM] = useState(parameter.CSEM);
  const [CGPA, setCGPA] = useState(parameter.CGPA);
  const [Attendance, setAttendance] = useState(parameter.Attendance);

  const postData = async (e) => {
    console.log(e);
    let waitData = await fetch("http://localhost:3000/api/updateData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    });

    let resData = await waitData.json();
    if (resData.status === "OK") {
      alert("Your Response has beed Recorded");
    }
  };
  console.log(Logged);

  const postReq = () => {
    console.log("Request For Post has been Made");
    const sentData = {
      id: Logged.RollNo,
      Category: Category,
      City: City,
      Nationality: Nationality,
      PhysicallyHandicap: PhysicallyHandicap,
      Religion: Religion,
      Address: Address,
      Attendance: Attendance,
      CGPA: CGPA,
      CSEM: CSEM,
    };

    postData(sentData);

    // Locally Updating Stuff
    parameter.Category = Category;
    parameter.City = City;
    parameter.Nationality = Nationality;
    parameter.PhysicallyHandicap = PhysicallyHandicap;
    parameter.Religion = Religion;
    parameter.Address = Address;
    parameter.Attendance = Attendance;
    parameter.CGPA = CGPA;
    parameter.CSEM = CSEM;
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
            <div>{parameter.Mobile}</div>
          </div>
          <div className={styles.infoParams}>
            <div>Admission Date</div>
            <span>:</span>
            <div>{parameter.YearOfAddmission}</div>
          </div>
          <div className={styles.infoParams}>
            <div>Category</div>
            <span>:</span>
            <div>
              {parameter.Category === "" ? (
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
              {parameter.City === "" ? (
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
              {parameter.Nationality === "" ? (
                <div className={styles.failError}>Not Available</div>
              ) : (
                parameter.Nationality
              )}
            </div>
          </div>
          <div className={styles.infoParams}>
            <div>Handicap</div>
            <span>:</span>
            <div>
              {parameter.PhysicallyHandicap === "" ? (
                <div className={styles.failError}>Not Available</div>
              ) : (
                parameter.PhysicallyHandicap
              )}
            </div>
          </div>
          <div className={styles.infoParams}>
            <div>Religion</div>
            <span>:</span>
            <div>
              {parameter.Religion === "" ? (
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
              {parameter.Address === "" ? (
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
              {parameter.Attendence === "" ? (
                <div className={styles.failError}>Not Available</div>
              ) : (
                parameter.Attendence + "%"
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
            <div>{parameter.Mobile}</div>
          </div>
          <div className={styles.infoParams}>
            <div>Admission Date</div>
            <span>:</span>
            <div>{parameter.YearOfAddmission}</div>
          </div>
          <div className={styles.infoParams}>
            <div>Category</div>
            <span>:</span>
            <select
              name="category"
              className={[styles.input, styles.select].join(" ")}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
              value={Category}
            >
              <option value={""} disabled hidden>
                ----------------------------Select----------------------------
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
            <input
              value={City}
              required
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className={styles.input}
              type="text"
            />
          </div>
          <div className={styles.infoParams}>
            <div>Nationality</div>
            <span>:</span>
            <select
              name="Nationality"
              className={[styles.input, styles.select].join(" ")}
              onChange={(event) => {
                setNationality(event.target.value);
              }}
              value={Nationality}
            >
              <option value={""} disabled hidden>
                ----------------------------Select----------------------------
              </option>
              <option value={"Indian"}>Indian</option>
              <option value={"Other"}>Other</option>
            </select>
          </div>
          <div className={styles.infoParams}>
            <div>Handicap</div>
            <span>:</span>
            <select
              name="PhysicallyHandicap"
              className={[styles.input, styles.select].join(" ")}
              onChange={(event) => {
                setPhysicallyHandicap(event.target.value);
              }}
              value={PhysicallyHandicap}
            >
              <option value={""} disabled hidden>
                ----------------------------Select----------------------------
              </option>
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No</option>
            </select>
          </div>
          <div className={styles.infoParams}>
            <div>Religion</div>
            <span>:</span>
            <input
              value={Religion}
              onChange={(e) => {
                setReligion(e.target.value);
              }}
              className={styles.input}
              type="text"
            />
          </div>

          <div className={styles.infoParams}>
            <div>Address</div>
            <span>:</span>
            <input
              value={Address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className={styles.input}
              type="text"
            />
          </div>
          <div className={styles.infoParams}>
            <div>CGPA</div>
            <span>:</span>
            <input
              value={CGPA}
              onChange={(e) => {
                setCGPA(e.target.value);
              }}
              className={styles.input}
              type="text"
            />
          </div>
          <div className={styles.infoParams}>
            <div>Current Semester</div>
            <span>:</span>
            <select
              name="CSEM"
              className={[styles.input, styles.select].join(" ")}
              onChange={(event) => {
                setCSEM(event.target.value);
              }}
              value={CSEM}
            >
              <option value={""} disabled hidden>
                ----------------------------Select----------------------------
              </option>
              <option value="I">I&#x02E2;&#x1D57; Semester</option>
              <option value="II">II&#x207F;&#x1D48; Semester</option>
              <option value="III">III&#x02B3;&#x1D48; Semester</option>
              <option value="IV">IV&#x1D57;&#x02B0; Semester</option>
              <option value="V">V&#x1D57;&#x02B0; Semester</option>
              <option value="VI">VI&#x1D57;&#x02B0; Semester</option>
              <option value="VII">VII&#x1D57;&#x02B0; Semester</option>
              <option value="VIII">VIII&#x1D57;&#x02B0; Semester</option>
            </select>
          </div>

          <div className={styles.infoParams}>
            <div>Attendance</div>
            <span>:</span>
            {attendanceEditabel === true ? (
              <input
                value={Attendance}
                onChange={(e) => {
                  setAttendance(e.target.value);
                }}
                pattern="[0-9]"
                required
                className={styles.input}
                type="text"
              />
            ) : (
              <div>
                {parameter.Attendance === "N/A" ? (
                  <div className={styles.failError}>Not Editable</div>
                ) : (
                  parameter.Attendance + "%"
                )}
              </div>
            )}
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
                      {parameter.FirstName} {parameter.LastName}
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
                    <div className={styles.cgpaBlock}>
                      {parameter.CGPA === "" ? "--" : parameter.CGPA}
                    </div>
                    <div className={styles.csemBlock}>
                      {parameter.CSEM === "" ? "--" : parameter.CSEM}
                    </div>
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
                  <></>
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
