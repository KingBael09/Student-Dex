import React from "react";
import styles from "../styles/Info.module.css";
import { AiOutlineUser } from "react-icons/ai";
// import { useUserData } from "../Context/dataHolder";
// import { useUserInfo } from "../context/userState";
import Carousel from "./carousel";

const Info = (props) => {

  const info = props.data;

  if (info === undefined) {
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
              {/* <div className={styles.head}>Name :</div> */}
              <div className={styles.res}>
                {info.FName} {info.LName}
              </div>
            </div>
            <div className={styles.infor}>
              {/* <div className={styles.head}>Roll No :</div> */}
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
