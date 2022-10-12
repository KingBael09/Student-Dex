import Head from "next/head";
import styles from "../styles/Home.module.css";
import Clock from "../components/clock";

// TODO: Add blur on navbar Hover
// const v = addEventListener("click", (e) => {
//   var dem = e.target.className;
//   console.log(dem);
// });

// addEventListener
// const v = addEventListener("click", (e) => {
//   var dem = e.target.className;
//   console.log(dem);
// });

export default function Home() {
  //   if (over == "true") {
  //   const val = "hello";
  //   console.log("set over is true");
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
      {/* <div className={styles.mains}>
         
          <div className={styles.headElm}>
            <div>
              <div>Notice</div>
              <div></div>
            </div>
          </div>
          <div className={styles.headElm}>
            <div>
              <Clock />
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.innerContent}>
            <div className={styles.header}>
              <h1>Student Info</h1>
            </div>
            <div className={styles.info}>info</div>
          </div>
        </div> */}

      {/* <div><Clock/></div> */}
      {/* </main> */}

      <main className={styles.mainPage}>
        <div className={styles.header}>
          <div>Dashboard</div>

          <div className={styles.Clock}>
            <Clock />
          </div>
        </div>
        {/* <hr /> */}
        {/* <div className={styles.border}><hr /></div> */}
        <div className={styles.wrap}>
          <div className={styles.major}>Info</div>
          <div className={styles.extras}>Extras</div>
        </div>
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
