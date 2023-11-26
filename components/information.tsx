import React from "react";
import styles from "../styles/information.module.css";
import { useRouter } from "next/router";
const Information = () => {
  const router = useRouter();
  const clickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/data/infr-page");
  };
  return (
    <div className="row ">
      <div
        className={`${"col-lg-7 col-md-10 col-sm-10 col-11 mx-auto d-flex flex-column align-items-center"} ${
          styles.back
        }`}
      >
        {" "}
        <img
          className={`${"col-8 col-md-6 col-lg-6"} ${styles.imgs}`}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hVHUIElWd9txFzO8kc1g1_mQnCy6LZbIghuProp2HL4dMtcCntYsNZQ88Rfcrqordd8&usqp=CAU"
        />
        <div>
          {" "}
          Next.js is a React framework that gives you building blocks to create
          web applications. By framework, we mean Next.js handles the tooling
          and configuration needed for React, and provides additional structure,
          features, and optimizations for your application.
        </div>
        <button onClick={clickHandler} className={styles.button}>
          read more...
        </button>
      </div>
    </div>
  );
};
export default Information;
