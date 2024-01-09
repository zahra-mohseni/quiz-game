import LogContext from "@/context/log-context";
import styles from "../styles/question-card.module.css";
import React, { FC, useContext, useState } from "react";
const QuestionCard: React.FC<{
  data: { question: string; options: string[]; answer: string; id: string }[];
}> = (props) => {
  const ctx = useContext(LogContext);
  const mainData = props.data;
  const [score, setScore] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  let x = 0;
  let quest = mainData[itemIndex];
  const dataLength = mainData.length;
  const selectHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const dataSwicher = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemIndex < dataLength - 1) {
      setItemIndex((prev) => prev + 1);
    }
  };
  if (typeof window !== "undefined" && window.localStorage) {
    let token = localStorage.getItem("token");
    if (token) {
      let expirationTime = Number(localStorage.getItem("expiration"));
      let presentTime = new Date().getTime();
      if (expirationTime - presentTime < 0) {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        ctx.logOut();
      }
    }
  }
  return (
    <form
      className={`${
        styles["card-container"]
      } ${"row d-flex flex-column align-items-center mx-auto"}`}
    >
      <div className={`${styles["qustion-card"]} ${"row w-75 display-1"}`}>
        {quest.question}
      </div>
      <div className={`${styles["button-box"]} ${"row w-75"}`}>
        <div
          className={`${
            styles["button-container"]
          } ${"row d-flex flex-row align-items-center"}`}
        >
          {" "}
          <button
            className={`${styles.button} ${"col-md-6"}`}
            onClick={selectHandler}
          >
            {quest.options[0]}
          </button>
          <button
            className={`${styles.button} ${"col-md-6"}`}
            onClick={selectHandler}
          >
            {" "}
            {quest.options[1]}
          </button>
        </div>
        <div
          className={`${
            styles["button-container"]
          } ${"row d-flex flex-row align-items-center"}`}
        >
          <button
            className={`${styles.button} ${"col-md-6"}`}
            onClick={selectHandler}
          >
            {" "}
            {quest.options[2]}
          </button>
          <button
            className={`${styles.button} ${"col-md-6"}`}
            onClick={selectHandler}
          >
            {" "}
            {quest.options[3]}
          </button>
        </div>
      </div>
      <div className="container d-flex flex-column align-items-center">
        <button className={styles["next-button"]} onClick={dataSwicher}>
          next question
        </button>
      </div>
    </form>
  );
};
export default QuestionCard;
