import styles from "../styles/form.module.css";
import { useRef } from "react";
const FormItem: React.FC<{
  onDataGetter: (data: {
    name: string;
    email: string;
    password: string;
  }) => void;
}> = (props) => {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name: name.current!.value,
      email: email.current!.value,
      password: password.current!.value,
    };
    props.onDataGetter(data);
    name.current!.value = "";
    email.current!.value = "";
    password.current!.value = "";
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
          <input
            ref={name}
            type="text"
            id="name"
            required
            placeholder="please enter your name"
          />
        </li>
        <li className=" d-flex flex-column col-md-10 mx-auto col-lg-10 col-sm-10 ">
          {" "}
          <label htmlFor="email">Email</label>
          <input
            ref={email}
            required
            id="email"
            type="email"
            placeholder="please enter you email address"
          />
        </li>
        <li className=" d-flex flex-column col-md-10 mx-auto col-lg-10 col-sm-10 ">
          {" "}
          <label htmlFor="password">Password</label>
          <input
            required
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
