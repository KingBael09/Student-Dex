import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/Clock.module.css";

const Clock = () => {
  const [hour, sethour] = useState("0");
  const [min, setmin] = useState("0");
  const [sec, setsec] = useState("0");
  const [session, setsession] = useState("AM");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let h = date.getHours().toString();
      let m = date.getMinutes().toString();
      let s = date.getSeconds().toString();
      setmin(m);
      setsec(s);
      if (h >= 12) {
        setsession("PM");
        sethour((h = h - 12));
      } else {
        if (h == 0 && session === "PM") {
          h = 12;
          sethour(h);
        } else {
          sethour(h);
        }
      }
    }, 1000);
  }, [session]);

  return (
    <div className={styles.data}>
      <span className={styles.clockElem}>{hour}:</span>
      <span className={styles.clockElem}>{min}:</span>
      <span className={styles.clockElem}>{sec} </span>
      <span className={styles.clockElem}>{session}</span>
    </div>
  );
};

export default Clock;
