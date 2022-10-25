import Head from "next/head";
import styles from "../styles/Home.module.css";
import Clock from "../components/clock";
import Info from "../components/Info";

// ? Done TODO: Add blur on navbar Hover

export default function Home(props) {


  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainPage}>
        <div className={styles.header}>
          <div>Dashboard</div>

          <div className={styles.Clock}>
            <Clock />
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={[styles.major, styles.dash].join(" ")}>
            <Info data={props.data} />
          </div>
          <div className={[styles.extras, styles.dash].join(" ")}>Extras</div>
        </div>
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  let ImportedData = await fetch("http://localhost:3000/api/userInfo");
  let data = await ImportedData.json();
  // console.log(data);
  return {
    props: { data },
  };
}
