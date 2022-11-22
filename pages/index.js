import Head from "next/head";
import styles from "../styles/Home.module.css";
import Clock from "../components/clock";
import Info from "../components/Info";
import Link from "next/link";
import Pannel from "../components/pannel";
import { useUserInfo } from "../context/userState";
import Login from "../components/login";
import Extras from "../components/extras";
import React, { useEffect, useState } from "react";
import { useUserData } from "../Context/dataHolder";

// ? Done TODO: Add blur on navbar Hover

export default function Home(props) {
  const [session, setsession] = useUserInfo();
  const [logged, setLogged] = useUserData();

  const [infoTemp, setinfoTemp] = useState();

  const setData = (e) => {
    setinfoTemp(e);
  };

  const secondServ = async () => {
    const RollNo = await session.RollNo;
    const Password = await session.Password;

    if (RollNo != undefined) {
      let stuData = await fetch(
        "http://127.0.0.1:1000/getAuthenticateStudent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ RollNo: RollNo, Password: Password }),
        }
      );
      let secData = await stuData.json();
      setData(secData);
      setLogged(secData);
    }
  };

  //? useEffect is Kinda Fucked Up as of Now!
  useEffect(() => {
    secondServ();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  // ? Fucked Up Logic

  if (session === "waiting") {
    return <Login />;
  }
  // !Before This is Fucked Up Logic
  else {
    return (
      <>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home Page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Pannel />
        <div className={styles.container}>
          <main className={styles.mainPage}>
            <div className={styles.header}>
              <div>Dashboard</div>

              <div className={styles.Clock}>
                <Clock />
              </div>
            </div>
            <div className={styles.wrap}>
              <div className={[styles.major, styles.dash].join(" ")}>
                <Info temp={infoTemp} />
              </div>
              <div className={[styles.extras, styles.dash].join(" ")}>
                <Extras data={infoTemp} />
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

// TODO: Learn To Implement jotai (global state manger) but no action
// TODO: Learn To Implement zustand (another manager with actions) with actions and internal call functions !Accessble outside react and can be listened through eventlistener in external script
