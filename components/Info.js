import React from "react";
import styles from "../styles/Info.module.css";
import { AiOutlineUser } from "react-icons/ai";
import Carousel from "./carousel";

const Info = (props) => {
  const info = props.data;

  if (info === undefined) {
    console.error("Internal Error 500 : Problem Fetching Data");
    return <div>LMAO</div>;
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
                {info.FName} {info.LName}
              </div>
            </div>
            <div className={styles.infor}>
              <div className={[styles.res, styles.rollcall].join(" ")}>
                {info.RollNo}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subSection}>
          <Carousel />
        </div>
      </div>
    );
  }
};

export default Info;
