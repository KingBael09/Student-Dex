import React, { useEffect, useState } from "react";
import styles from "../styles/Info.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { useUserData } from "../Context/dataHolder";
import { useUserInfo } from "../context/userState";

const Info = (props) => {
  // const [info, setInfo] = useState(props.data);
  // const info = props.data;
  const [info, setinfo] = useState();
  const [session, setsession] = useUserInfo();

  const dataService = async () => {
    let ImportedData = await fetch("http://localhost:3000/api/userInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(session),
    });
    let data = await ImportedData.json();
    let finaldata = data;
    // setDAMN(finalData);
    console.log("This Statement go BRrrrrr......");
    // console.log(finaldata);
    setinfo(finaldata);
    console.log(finaldata);
  };
  // useEffect
  useEffect(() => {
    dataService()
  
  }, [])
  
  if (info === undefined) {
    return <div>LMAO</div>;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.infor}>
            <div className={styles.head}>Name :</div>
            <div className={styles.res}>
              {info.FName} {info.LName}
            </div>
          </div>
          <div className={styles.infor}>
            <div className={styles.head}>Roll No :</div>
            <div className={styles.res}>{info.RollNo}</div>
          </div>
          <div className={styles.infor}>
            <div className={styles.head}>Branch :</div>
            <div className={styles.res}>{info.Branch}</div>
          </div>
          <div className={styles.infor}>
            <div className={styles.head}>D.O.B :</div>
            <div className={styles.res}>{info.DOB}</div>
          </div>
        </div>
        <div className={styles.img}>
          <AiOutlineUser className={styles.icon} />
        </div>

        {/* <div>{props.data} Lma</div> */}
      </div>
    );
  }
};

export default Info;
