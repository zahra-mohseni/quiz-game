import styles from "../styles/form.module.css";
const FormItem = () => {
  return (
    <form className={`${styles["form-card"]} ${"row mx-auto "}`}>
      <ul
        className={`${"row d-flex flex-column col-lg-5 col-md-6 col-sm-8 col-10"} ${
          styles["un-li"]
        }`}
      >
        <li className=" d-flex flex-column col-md-10 mx-auto col-lg-10 col-sm-10 ">
          {" "}
          <label htmlFor="name">Name</label>
          <input
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
            id="email"
            type="email"
            placeholder="please enter you email address"
          />
        </li>
        <li className=" d-flex flex-column col-md-10 mx-auto col-lg-10 col-sm-10 ">
          {" "}
          <label htmlFor="password">Password</label>
          <input
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
          sign in
        </button>
      </ul>
    </form>
  );
};
export default FormItem;
