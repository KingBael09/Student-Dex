import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import Head from "next/head";

import { useUserInfo } from "../context/userState";
import { useRouter } from "next/router";

const Login = (props) => {
  const router = useRouter();
  const [id, setid] = useState("");
  const [pass, setpass] = useState("");
  const [dataInput, setDataInput] = useState();
  const [some, setsome] = useUserInfo();

  const handleChange = (e) => {
    if (e.target.name === "id") {
      setid(e.target.value);
    } else {
      setpass(e.target.value);
    }
  };

  // !Experemental Code BELOW

  // const handleLogin = (e) => {};

  const handleSubmit = (e) => {
    const info = { id: id, Pass: pass };
    callbackSet(info);
    e.preventDefault();
  };

  const callbackSet = (e) => {
    // setsome(e);
    if (typeof window != "undefined") {
      sessionStorage.setItem("id", e.uid);
    }
    callSessionValidator(e);
  };

  const callSessionValidator = async (e) => {
    // console.log(e);
    let sentData = await fetch("http://localhost:3000/api/userSession", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    });

    let resData = await sentData.json();
    // console.log(resData);

    if (resData.status == "Invalid") {
      alert("Invalid Password");
    } else if (resData.status == "Unavailable") {
      alert("User Not Found");
    } else {
      // console.log("Welcome");
      setsome(e);
    }
  };

  // ! Experemental Code ABOVE

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
                    {/* <Link href="/"> */}
                    <button>Login</button>
                    {/* </Link> */}
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

export default Login;
