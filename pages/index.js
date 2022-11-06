import Head from "next/head";
import styles from "../styles/Home.module.css";
import Clock from "../components/clock";
import Info from "../components/Info";
import Link from "next/link";
import Pannel from "../components/pannel";
import { useUserInfo } from "../context/userState";
import { useRouter } from "next/router";
import Login from "../components/login";
import Extras from "../components/extras";
// import { useEffect, useState } from "react";

// ? Done TODO: Add blur on navbar Hover

export default function Home(props) {
  // const router = useRouter();
  const [session, setsession] = useUserInfo();

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
                <Info />
              </div>
              <div className={[styles.extras, styles.dash].join(" ")}>
                <Extras />
              </div>
            </div>
          </main>

          {/* <footer className={styles.footer}></footer> */}
        </div>
      </>
    );
  }
}
