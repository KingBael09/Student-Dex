import React, { useState } from "react";
import styles from "../styles/Signup.module.css";
import Head from "next/head";

const Signup = () => {
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [Gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [AdmissionData, setAdmissionData] = useState("");
  const [Mail, setMail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Branch, setBranch] = useState("NA");
  const [Pass, setPass] = useState("");
  const [RePass, setRePass] = useState("");

  const [SignData, setSignData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Pass != RePass) {
      alert("Password Don't Match");
      setPass("");
      setRePass("");
    } else {
      // const tempData = {
      //   Fname: FName,
      //   LName: LName,
      //   Gender: Gender,
      //   DOB: DOB,
      //   AdmissionData: AdmissionData,
      //   Mail: Mail,
      //   Phone: Phone,
      //   Branch: Branch,
      //   Pass: Pass
      // };
      const tempData = {
        FName,
        LName,
        Gender,
        DOB,
        AdmissionData,
        Mail,
        Phone,
        Branch,
        Pass,
      };
      setSignData(tempData);
      // console.log(tempData);

      sendData(tempData);
    }

    // fetch("http://localhost:3000/api/userSave", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(SignData),
    // })
    //   .then((res) => res.text())
    //   .then((demo) => {
    //     console.log("Success: ", demo.toString());
    //     alert("Submitted SuccessFully");
    //   })
    //   .catch((error) => {
    //     console.error("Error: ", error);
    //   });
  };

  const genChange = (e) => {
    let select = e.target.value;
    if (select === "male") {
      setGender("Male");
    } else {
      setGender("Female");
    }
  };

  const sendData = (e) => {
    fetch("http://localhost:3000/api/userSave", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    })
      .then((res) => res.text())
      .then((demo) => {
        console.log("Success: ", demo.toString());
        alert("Submitted SuccessFully");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.heading}>Sign Up</div>
        <div className={styles.innerform}>
          <form onSubmit={handleSubmit} className={styles.formBody}>
            <div className={styles.actualForm}>
              <div className={styles.name}>
                <label htmlFor="fname">Name</label>
                <div>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="First Name"
                    value={FName}
                    onChange={(event) => setFName(event.target.value)}
                    // onChange={handleOnchange}
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
                    // onChange={handleOnchange}
                    required
                  />
                </div>
              </div>
              <div className={styles.flexBox}>
                Gender
                <div className={styles.intFlex}>
                  <input
                    className={styles.input}
                    type="radio"
                    value={"male"}
                    onChange={genChange}
                    // value={Gender.Male}
                    name="gender"
                    required
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className={styles.intFlex}>
                  <input
                    className={styles.input}
                    type="radio"
                    value={"female"}
                    onChange={genChange}
                    // value={Gender.Female}
                    name="gender"
                    required
                  />
                  <label htmlFor="female">Female</label>
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
              {/* <div>
                <label htmlFor="rollNo">GID.</label>
                <input className={styles.input}type="text" required />
              </div> */}
              <div>
                <label htmlFor="branch">Branch</label>
                <select
                  name="branch"
                  className={styles.input}
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
            <div className={styles.submit}>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
