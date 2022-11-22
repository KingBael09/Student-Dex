import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import Head from "next/head";
import { useUserInfo } from "../context/userState";

const Login = () => {
  const [id, setid] = useState("");
  const [pass, setpass] = useState("");
  const [some, setsome] = useUserInfo();

  const handleChange = (e) => {
    if (e.target.name === "id") {
      setid(e.target.value);
    } else {
      setpass(e.target.value);
    }
  };

  // !Experemental Code BELOW

  const handleSubmit = (e) => {
    const info = { RollNo: id, Password: pass };
    callbackSet(info);
    e.preventDefault();
  };

  const callbackSet = (e) => {
    callSessionValidator(e);
  };

  const callSessionValidator = async (e) => {
    let stuData = await fetch("http://127.0.0.1:1000/getAuthenticateStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    });
    let secData = await stuData.json();
    // TODO: BUG: if user not available gives fetch error
    if (secData.message == "Invalid") {
      alert("Invalid Password");
    } else if (secData.message == "No User") {
      alert("User Not Found");
    } else {
      setsome(e);
    }
  };

  // ! Experemental Code ABOVE

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.mainWrap}>
        <div className={[styles.wrapper, styles.major].join(" ")}>
          <div className={styles.main}>
            <div className={styles.form}>
              <div className={styles.heading}>Login</div>
              <div className={styles.innerForm}>
                <form className={styles.innerForm} onSubmit={handleSubmit}>
                  <div className={styles.field}>
                    <label htmlFor="user">UserID</label>
                    <input
                      className={styles.input}
                      type="text"
                      name="id"
                      placeholder="BE20F05F063"
                      value={id}
                      onChange={handleChange}
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
                      value={pass}
                      onChange={handleChange}
                      required
                      minLength={8}
                    />
                  </div>
                  <div className={styles.submit}>
                    <button>Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className={[styles.secondaryWrapper, styles.secondary].join(" ")}>
          <div className={styles.main}>
            <div className={[styles.form, styles.secondaryForm].join(" ")}>
              <div className={styles.secHeading}>New Student</div>
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

export default Login;

// TODO: Streamline Login Flow
