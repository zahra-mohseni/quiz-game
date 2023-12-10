import axios from "axios";
import styles from "../styles/form.module.css";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
const FormItem: React.FC<{
  onDataGetter: (data: {
    name: string;
    email: string;
    password: string;
    score: number;
  }) => void;
}> = (props) => {
  const [submitting, setIsSubmitting] = useState<boolean>(false);
  const [changer, setChanger] = useState<boolean>(false);
  /*useEffect(() => {
    axios.get("api/pj-api").then((response) => {
      console.log(response);
    });
  }, []);*/
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setChanger(!changer);
    props.onDataGetter({
      name: name.current!.value,
      email: email.current!.value,
      password: password.current!.value,
      score: 0,
    });
  };

  return (
    <form
      className={`${styles["form-card"]} ${"row mx-auto "}`}
      onSubmit={submitHandler}
    >
      <ul
        className={`${"row d-flex flex-column col-lg-5 col-md-6 col-sm-8 col-10"} ${
          styles["un-li"]
        }`}
      >
        <li className=" d-flex flex-column col-md-10 mx-auto col-lg-10 col-sm-10 ">
          {" "}
          <label htmlFor="name">Name</label>
          {submitting && name.current?.value === "" && (
            <p className={styles.error}>please enter your name</p>
          )}
          <input
            ref={name}
            type="text"
            id="name"
            placeholder="please enter your name"
          />
        </li>
        <li className=" d-flex flex-column col-md-10 mx-auto col-lg-10 col-sm-10 ">
          {" "}
          <label htmlFor="email">Email</label>
          {!email.current?.value.includes("@") && submitting && (
            <p className={styles.error}>please a valid email(include @)</p>
          )}
          <input
            ref={email}
            id="email"
            type="email"
            placeholder="please enter you email address"
          />
        </li>
        <li className=" d-flex flex-column col-md-10 mx-auto col-lg-10 col-sm-10 ">
          {" "}
          <label htmlFor="password">Password</label>
          {password.current?.value.trim().length < 6 && submitting && (
            <p className={styles.error}>
              your password should be at least 6 caracters{" "}
            </p>
          )}
          <input
            ref={password}
            type="password"
            id="password"
            placeholder="please enter your password"
          />
        </li>
        <button
          className={`${"mx-auto col-sm-3 col-md-3 col-3 col-lg-3"} ${
            styles["button"]
          }`}
        >
          sign up
        </button>
      </ul>
    </form>
  );
};
export default FormItem;
