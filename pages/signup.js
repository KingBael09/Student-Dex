import React from "react";
import styles from "../styles/Signup.module.css";
import Head from "next/head";
const signup = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.heading}>Sign Up</div>
        <div className={styles.innerform}>
          <form action="" className={styles.formBody}>
            <div className={styles.actualForm}>
              <div className={styles.name}>
                <label htmlFor="fname">Name</label>
                <div>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Last Name"
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
                    value="male"
                    name="gender"
                    required
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className={styles.intFlex}>
                  <input
                    className={styles.input}
                    type="radio"
                    value="femal"
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
                />
              </div>
              <div>
                <label htmlFor="admissionYear">Year of Admission</label>
                <input type="month" className={styles.input} />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  className={styles.input}
                  type="email"
                  pattern="[A-Za-z0-9.+-]+@+[A-Za-z0-9]+\.+[A-Za-z]{2,}"
                  required
                  placeholder="example@gmail.com"
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
                />
              </div>
              {/* <div>
                <label htmlFor="rollNo">GID.</label>
                <input className={styles.input}type="text" required />
              </div> */}
              <div>
                <label htmlFor="branch">Branch</label>
                <select name="branch" className={styles.input}>
                  <option value="NA" disabled selected hidden>
                    ------------------------------Select------------------------------
                  </option>
                  <option value="Civil">Civil</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Electronics">Electronics</option>
                  <option value="CSE">Computer Science</option>
                  <option value="IT">Information Technology</option>
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

export default signup;
