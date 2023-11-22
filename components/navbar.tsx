import Link from "next/link";
import { FC } from "react";
import styles from "../styles/navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      {" "}
      <Link className={styles["nav-item"]} href="/">
        HomePage
      </Link>
      <Link className={styles["nav-item"]} href="/quiz">
        Quiz
      </Link>
      <Link className={styles["nav-item"]} href="/authentication">
        Signin/up
      </Link>
    </div>
  );
};
export default Navbar;
