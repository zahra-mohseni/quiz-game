import styles from "../styles/question-card.module.css";
import { FC } from "react";
const QuestionCard: React.FC<{
  data: { quest: string; options: string[]; answer: string; id: string }[];
}> = (props) => {
  const item1 = props.data[0];
  console.log("first");
  return (
    <form
      className={`${
        styles["card-container"]
      } ${"row d-flex flex-column align-items-center mx-auto"}`}
    >
      <div className={`${styles["qustion-card"]} ${"row w-75 display-1"}`}>
        {item1.quest}
      </div>
      <div className={`${styles["button-box"]} ${"row w-75"}`}>
        <div
          className={`${
            styles["button-container"]
          } ${"row d-flex flex-row align-items-center"}`}
        >
          {" "}
          <button className={`${styles.button} ${"col-md-6"}`}>
            {item1.options[0]}
          </button>
          <button className={`${styles.button} ${"col-md-6"}`}>
            {" "}
            {item1.options[1]}
          </button>
        </div>
        <div
          className={`${
            styles["button-container"]
          } ${"row d-flex flex-row align-items-center"}`}
        >
          <button className={`${styles.button} ${"col-md-6"}`}>
            {" "}
            {item1.options[2]}
          </button>
          <button className={`${styles.button} ${"col-md-6"}`}>
            {" "}
            {item1.options[3]}
          </button>
        </div>
      </div>
      <div className="container d-flex flex-column align-items-center">
        <button className={styles["next-button"]}>next question</button>
      </div>
    </form>
  );
};
export default QuestionCard;
