import React, { useState } from "react";
import styles from "../styles/Signup.module.css";
import Head from "next/head";
import Link from "next/link";

const Signup = () => {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [Gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [AdmissionData, setAdmissionData] = useState("");
  const [Mail, setMail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Branch, setBranch] = useState("NA");
  const [RollNo, setRollNo] = useState("");
  const [Pass, setPass] = useState("");
  const [RePass, setRePass] = useState("");

  const [stage, setStage] = useState(1);

  const clearState = () => {
    setFName("");
    setLName("");
    setGender("");
    setDOB("");
    setAdmissionData("");
    setMail("");
    setPhone("");
    setBranch("");
    setRollNo("");
    setPass("");
    setRePass("");
    setStage(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Pass != RePass) {
      alert("Password Don't Match");
      setPass("");
      setRePass("");
    } else {
      const tempData = {
        FirstName: FName,
        LastName: LName,
        Gender: Gender,
        DOB: DOB,
        YearOfAddmission: AdmissionData,
        Mail: Mail,
        Mobile: Phone,
        Branch: Branch,
        RollNo: RollNo,
        Password: Pass,
      };
      sendData(tempData);
    }
  };

  const genChange = (e) => {
    let select = e.target.value;
    if (select === "male") {
      setGender("Male");
    } else {
      setGender("Female");
    }
  };

  const sendData = async (e) => {
    console.log(e);

    let sendToDB = await fetch("http://127.0.0.1:1000/createstudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    });
    let res = await sendToDB.json();
    if (res.status === "Exists") {
      alert("User Already Exists");
    } else {
      alert("Submitted SuccessFully");
    }

    // ?Try Catch Not Enabled Here

    clearState();
  };

  //! Expremental Features Below Here

  const form = () => {
    if (stage === 1) {
      return (
        <div className={styles.firstForm}>
          <div className={styles.name}>
            <label htmlFor="fname">Name</label>
            <div>
              <input
                className={styles.input}
                type="text"
                placeholder="First Name"
                value={FName}
                onChange={(event) => setFName(event.target.value)}
                required
              />
            </div>
            <div>
              <input
                className={styles.input}
                type="text"
                placeholder="Last Name"
                value={LName}
                onChange={(event) => setLName(event.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.flexBox}>
            Gender
            <div className={styles.flexWrap}>
              <div className={styles.intFlex}>
                <input
                  className={[styles.input, styles.radio].join(" ")}
                  type="radio"
                  value={"male"}
                  onChange={genChange}
                  name="gender"
                  required
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className={styles.intFlex}>
                <input
                  className={[styles.input, styles.radio].join(" ")}
                  type="radio"
                  value={"female"}
                  onChange={genChange}
                  name="gender"
                  required
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="DOB">D.O.B</label>
            <input
              className={[styles.dob, styles.input].join(" ")}
              type="date"
              onChange={(event) => setDOB(event.target.value)}
              value={DOB}
            />
          </div>
          <div>
            <label htmlFor="admissionYear">Year of Admission</label>
            <input
              type="month"
              className={styles.input}
              value={AdmissionData}
              onChange={(event) => setAdmissionData(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className={styles.input}
              type="email"
              pattern="[A-Za-z0-9.+-]+@+[A-Za-z0-9]+\.+[A-Za-z]{2,}"
              required
              placeholder="example@gmail.com"
              value={Mail}
              onChange={(event) => setMail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              className={styles.input}
              type="phone"
              required
              placeholder="10-digit Number"
              pattern="[0-9]{9,}"
              value={Phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="branch">Branch</label>
            <select
              name="branch"
              className={[styles.input, styles.select].join(" ")}
              // value={Branch}
              onChange={(event) => setBranch(event.target.value)}
              value={Branch}
            >
              <option value={"NA"} disabled hidden>
                ------------------------------Select------------------------------
              </option>
              <option value={"Civil"}>Civil</option>
              <option value={"Mechanical"}>Mechanical</option>
              <option value={"Electrical"}>Electrical</option>
              <option value={"Electronics"}>Electronics</option>
              <option value={"CSE"}>Computer Science</option>
              <option value={"IT"}>Information Technology</option>
            </select>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.secondForm}>
          <div>
            <label htmlFor="rollNo">Roll No.</label>
            <input
              className={styles.input}
              type="text"
              placeholder="BE20F05F063"
              value={RollNo}
              onChange={(event) => setRollNo(event.target.value)}
              pattern="[A-Z]{2}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}"
              title="Enter Roll Number"
              required
            />
          </div>

          <div>
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              required
              minLength={8}
              title="Password Must be 8 Characters Long"
              className={styles.input}
              placeholder="******************"
              value={Pass}
              onChange={(event) => setPass(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rePassword">RE-Password</label>
            <input
              type="password"
              required
              minLength={8}
              title="Password Must be 8 Characters Long"
              className={styles.input}
              placeholder="******************"
              value={RePass}
              onChange={(event) => setRePass(event.target.value)}
            />
          </div>
        </div>
      );
    }
  };

  const submit = () => {
    if (stage === 1) {
      return (
        <div className={styles.submit}>
          <button onClick={handleNext}>Next {"->"} </button>
        </div>
      );
    } else {
      return (
        <div className={styles.submit}>
          <button onClick={resetStage}>{"<-"} Back</button>
        </div>
      );
    }
  };

  const submitMain = () => {
    if (stage === 2) {
      return (
        <div className={[styles.submit, styles.mainSubmit].join(" ")}>
          <button>Submit</button>
        </div>
      );
    }
  };

  const resetStage = () => {
    setStage(1);
  };

  const handleNext = () => {
    const condition =
      FName != "" &&
      LName != "" &&
      Gender != "" &&
      DOB != "" &&
      AdmissionData != "" &&
      Mail != "" &&
      Phone != "" &&
      Branch != "";

    if (condition == true) {
      setStage(2);
    } else {
      {
        const arr = {
          FirstName: FName,
          LastName: LName,
          Gender: Gender,
          DOB: DOB,
          AdmissionData: AdmissionData,
          Mail: Mail,
          Phone: Phone,
        };

        for (const key in arr) {
          if (arr[key] === "") {
            alert(`${key} missing`);
            return;
          }
        }
      }
    }
  };

  //! Expremental Features Above Here

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.partA}>
          <div className={styles.heading}>Sign Up!</div>
          <div className={styles.innerform}>
            <form onSubmit={handleSubmit} className={styles.formBody}>
              <div className={styles.actualForm}>{form()}</div>
              {submitMain()}
            </form>
            {submit()}
          </div>
        </div>
        <div className={styles.partB}>
          <div className={styles.loginRedirect}>
            <div className={styles.header}>
              <div>
                <div>Already</div> <div>Registered</div>
              </div>
              <div>?</div>
            </div>
            <div className={[styles.loginButton, styles.submit].join(" ")}>
              <Link href={"/"}>
                <button>Login!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
