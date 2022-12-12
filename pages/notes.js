import React from "react";
import Head from "next/head";
import { useUserInfo } from "../context/userState";
import { useUserData } from "../Context/dataHolder";
import Router from "next/router";
import styles from "../styles/Notes.module.css";
import { useState } from "react";
import { useEffect } from "react";

const Notes = () => {
  const [session, setsession] = useUserInfo();
  const [Logged, setLogged] = useUserData();

  const [SSEM, setSSEM] = useState("");
  const [course, setCourse] = useState("");

  const getitems = async () => {
    let senData = await fetch("http://localhost:3000/api/getNotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Branch: Logged.Branch }),
    });

    const resData = await senData.json();
    setCourse(resData);
  };

  const showData = (e) => {
    if (e != "") {
      const objLen = Object.keys(course[`${e}`]).length;
      console.log(course[`V`]);

      console.log(objLen);
      return (
        <>
          <div>Hi </div>
        </>
      );
    }
  };

  useEffect(() => {
    getitems();
    // displaySem(SSEM);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SSEM]);

  if (session === "waiting") {
    if (typeof window != "undefined") {
      Router.push("/");
      return;
    }
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>Notes</title>
        </Head>
        {/* <div className={styles.wrap}>
          <div className={styles.selector}>
            <select
              name="CSEM"
              className={[styles.input, styles.select].join(" ")}
              onChange={(event) => {
                setSSEM(event.target.value);
              }}
              value={SSEM}
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
          <div className={styles.content}>
            {course == "" ? "loading" : showData(SSEM)}
          </div>
        </div> */}

        <div className={styles.comingSoon}>
          <div>
            Coming Soon<span className={styles.exc}>!</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Notes;
