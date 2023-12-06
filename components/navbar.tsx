import Link from "next/link";
import styles from "../styles/navbar.module.css";
const Navbar = () => {
  const logHandler = () => {
    let token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("expiration");
    } else {
    }
  };
  return (
    <div className={styles.navbar}>
      <div>
        <Link className={styles["nav-item"]} href="/">
          HomePage
        </Link>
        <Link className={styles["nav-item"]} href="/quiz">
          Quiz
        </Link>
        <Link
          className={styles["nav-item"]}
          href="/authentication"
          onClick={logHandler}
        >
          sign in/up
        </Link>
      </div>{" "}
      <button className={styles.button}>quest user</button>
    </div>
  );
};
export default Navbar;
