import React, { useState } from "react";
import styles from "../styles/Info.module.css";
import { AiOutlineUser } from "react-icons/ai";

const Info = (props) => {
  const [info, setInfo] = useState(props.data);
  // console.log(info);
  // console.log(info.Phone)
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
          <div className={styles.res}>
            {info.DOB.Day}/{info.DOB.Month}/{info.DOB.Year}
          </div>
        </div>
      </div>
      <div className={styles.img}>
        <AiOutlineUser className={styles.icon} />
      </div>

      {/* <div>{props.data} Lma</div> */}
    </div>
  );
};

// export async function getServerSideProps(context) {
//   let ImportedData = await fetch("http://localhost:3000/api/userInfo");
//   let data = await ImportedData.json();
//   console.log(data);
//   return {
//     props: { data },
//   };
// }

export default Info;
