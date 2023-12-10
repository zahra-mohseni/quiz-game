import Link from "next/link";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { logActions } from "../redux/store";
import styles from "../styles/navbar.module.css";
const Navbar = () => {
  const isLogIn = useSelector((state: any) => state.logState.isLogedIn);
  console.log(isLogIn);
  const [tokenId, setTokenId] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let tok = localStorage.getItem("token");
      if (tok) {
        console.log("token find");
        setTokenId(tok);
      }
    }
  }, [tokenId]);

  const logHandler = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      let token = localStorage.getItem("token");

      if (token) {
        console.log("token exist");
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        setTokenId("");
        console.log("token removed");
      }
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
        <Link className={styles["nav-item"]} href="/authentication">
          sign in/up
        </Link>
      </div>{" "}
      <button className={styles.button} onClick={logHandler}>
        {tokenId === null ? (
          <p style={{ margin: 0 }}>quest user</p>
        ) : (
          <p style={{ margin: 0 }}> log out </p>
        )}
      </button>
    </div>
  );
};
export default Navbar;
