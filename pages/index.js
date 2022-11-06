import Head from "next/head";
import styles from "../styles/Home.module.css";
import Clock from "../components/clock";
import Info from "../components/Info";
import Link from "next/link";
import Pannel from "../components/pannel";

import { useUserInfo } from "../context/userState";
import { useUserData } from "../Context/dataHolder";
import { useRouter } from "next/router";
import Login from "../components/login";
import { useEffect, useState } from "react";

// ? Done TODO: Add blur on navbar Hover

export default function Home(props) {
  const router = useRouter();
  const [session, setsession] = useUserInfo();
  // const [data, setdata] = useState("");

  // ? Fucked Up Logic
  const [DAMN, setDAMN] = useUserData();

  // TODO: Has Some Bugs ==> Causes re-rendering of component
  const dataService = async () => {
    let ImportedData = await fetch("http://localhost:3000/api/userInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(session),
    });
    let data = await ImportedData.json();
    let finalData = data;
    setDAMN(finalData);
    console.log("This Statement go BRrrrrr......");
  };

  // ? Fucked Up Logic

  if (session === "waiting") {
    // router.push('/')
    // console.log(useUserInfo());

    return <Login />;
  }
  // !Before This is Fucked Up Logic
  else {
    dataService();

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
                Extras
              </div>
            </div>
          </main>

          {/* <footer className={styles.footer}></footer> */}
        </div>
      </>
    );
  }
}

// export async function getServerSideProps(e) {
//   // console.log(context + " Lmao ");
//   console.log(e);
//   let ImportedData = await fetch("http://localhost:3000/api/userInfo", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(e),
//   });
//   let data = await ImportedData.json();
//   setdataD(data);
//   // // console.log(data);
//   return {
//     props: { data },
//   };
// }
