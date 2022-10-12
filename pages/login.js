import React from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import Head from "next/head";
// @refresh reset
const login = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>
      {/* <div className={styles.abs}>Student DEX</div> */}
      <div className={styles.mainWrap}>
        <div className={[styles.wrapper, styles.major].join(" ")}>
          <div className={styles.main}>
            <div className={styles.form}>
              <div className={styles.heading}>Login</div>
              <div className={styles.innerForm}>
                <form className={styles.innerForm}>
                  <div className={styles.field}>
                    <label htmlFor="user">UserID</label>
                    <input
                      className={styles.input}
                      type="text"
                      name="user"
                      placeholder="BE20F05F063"
                      required
                      pattern="[A-Z]{2}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}"
                      title="Enter Roll Number"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="password">Password</label>
                    <input
                      className={styles.input}
                      type="password"
                      name="pass"
                      placeholder="******************"
                      required
                      minLength={8}
                    />
                  </div>
                  <div className={styles.submit}>
                    <button>Login</button>
                  </div>
                </form>
              </div>
              {/* <div className={styles.forgot}>Forgot Password</div> */}
            </div>
            {/* <div className={styles.info}>Forgot Password?</div> */}
          </div>
        </div>
        <div className={[styles.secondaryWrapper, styles.secondary].join(" ")}>
          <div className={styles.main}>
            <div className={[styles.form, styles.secondaryForm].join(" ")}>
              <div className={styles.secHeading}>
                New Student
                {/* <span className={styles.obj}>?</span> */}
              </div>
              <div className={styles.signUp}>
                <Link href="/signup">
                  <button>Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
