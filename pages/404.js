import Link from "next/link";
import React from "react";
// import { useRouter } from "next/router";
import styles from "../styles/NotFound.module.css";

const custom404 = () => {
  // const router = useRouter();
  // console.log(router);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.firstBlock}>
          <h1 className={styles.nextError}>404</h1>
        </div>
        <div className={styles.secondBlock}>
          <h2 className={styles.nextErrorMsg}>This page could not be found!</h2>
        </div>
      </div>
      <Link href={"/"}>
        <div className={styles.home}>
          <h2>Home</h2>
        </div>
      </Link>
    </div>
  );
};

export default custom404;
