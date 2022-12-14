import React, { useEffect, useState } from "react";
import styles from "../styles/Carousel.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carouesl = (props) => {
  const [choice, setchoice] = useState("first");
  const [attCount, setattCount] = useState(0);

  const data = props.data;

  useEffect(() => {
    if (data.Attendence != "") {
      setattCount(data.Attendence);
    }
  }, [data]);

  const generateObj = () => {
    let present = `<div class=${styles.pointRed}></div>`;
    let total = `<div class=${styles.pointBlack}></div>`;
    let res = "";
    for (let i = 0; i < attCount; i++) {
      res = res + present;
    }
    for (let i = 0; i < 100 - attCount; i++) {
      res = res + total;
    }
    return res;
  };

  const returnCard = () => {
    if (choice === "first") {
      return (
        <>
          <div className={[styles.subMenu, styles.Attendance].join(" ")}>
            <div className={styles.heading}>
              <div>Attendance</div>
              <div className={[styles.value, styles.percent].join(" ")}>
                {attCount}%
              </div>
            </div>
            <div className={[styles.content, styles.attrData].join(" ")}>
              <div dangerouslySetInnerHTML={{ __html: generateObj() }}></div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={[styles.subMenu, styles.Notice].join(" ")}>
            <div className={styles.heading}>
              <div>Notice</div>
              <div className={styles.value}>
                <div className={styles.alert}>0</div>
              </div>
            </div>
            <div className={[styles.content, styles.news].join(" ")}>
              {"->> "}No New News
            </div>
          </div>
        </>
      );
    }
  };

  const handleRight = () => {
    if (choice === "first") {
      setchoice("second");
    }
  };
  const handleLeft = () => {
    if (choice === "second") {
      setchoice("first");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.card}>
          <div className={[styles.button, styles.left].join(" ")}>
            <button onClick={handleLeft}>
              <IoIosArrowBack />
            </button>
          </div>
          {returnCard()}
          <div className={[styles.button, styles.right].join(" ")}>
            <button onClick={handleRight}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className={styles.page}>
          <input
            type={"radio"}
            name="page"
            checked={choice === "first" ? true : false}
            readOnly
            className={styles.dom}
          ></input>
          <input
            type={"radio"}
            name="page"
            checked={choice === "second" ? true : false}
            readOnly
            className={styles.dom}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Carouesl;
