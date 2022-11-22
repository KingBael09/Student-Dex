import React from "react";
import styles from "../styles/Info.module.css";
import { AiOutlineUser } from "react-icons/ai";
import Carousel from "./carousel";

const Info = (props) => {
  const temp = props.temp;

  if (temp === undefined) {
    return (
      <div className={styles.loading}>
        <span className={styles.loadingAnimation}></span>{" "}
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.hud}>
          <div className={styles.img}>
            <AiOutlineUser className={styles.icon} />
          </div>
          <div className={styles.wrap}>
            <div className={[styles.infor, styles.name].join(" ")}>
              <div className={styles.res}>
                {temp.FirstName} {temp.LastName}
              </div>
            </div>
            <div className={styles.infor}>
              <div className={[styles.res, styles.rollcall].join(" ")}>
                {temp.RollNo}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subSection}>
          <Carousel data={temp} />
        </div>
      </div>
    );
  }
};

export default Info;
