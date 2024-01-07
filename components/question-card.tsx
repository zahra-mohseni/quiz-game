import styles from "../styles/question-card.module.css";
import React, { FC, useState } from "react";
const QuestionCard: React.FC<{
  data: { question: string; options: string[]; answer: string; id: string }[];
}> = (props) => {
  const mainData = props.data;
  let firtItem = mainData[0];
  const [itemIndex, setItemIndex] = useState(0);
  let x = 0;
  let quest = mainData[itemIndex];
  const dataLength = mainData.length;
  console.log(dataLength);
  const dataSwicher = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemIndex < dataLength - 1) {
      setItemIndex((prev) => prev + 1);
    }
  };

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
          <button className={`${styles.button} ${"col-md-6"}`}>
            {quest.options[0]}
          </button>
          <button className={`${styles.button} ${"col-md-6"}`}>
            {" "}
            {quest.options[1]}
          </button>
        </div>
        <div
          className={`${
            styles["button-container"]
          } ${"row d-flex flex-row align-items-center"}`}
        >
          <button className={`${styles.button} ${"col-md-6"}`}>
            {" "}
            {quest.options[2]}
          </button>
          <button className={`${styles.button} ${"col-md-6"}`}>
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
