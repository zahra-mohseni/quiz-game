import { useRouter } from "next/router";
import FormItem from "../../components/form";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useContext } from "react";
import LogContext from "@/context/log-context";
import SignInForm from "@/components/sign-in";
import { Chela_One } from "next/font/google";
const Authentication = () => {
  const ctx = useContext(LogContext);
  const [mode, setMode] = useState<string>("sign-up");
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState("");

  const params = searchParams?.get("mode");
  console.log(params);
  const [user, setUser] = useState<{
    id: string;
    name: string;
    email: string;
    score: number;
  }>();
  const [token, setToken] = useState<string>("");

  if (typeof window !== "undefined" && window.localStorage && token !== "") {
    let token = localStorage.setItem("token", user!.id);
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 1);
    localStorage.setItem("expiration", expirationTime.toISOString());
    let isExpired = new Date();
    let timeSpending = expirationTime.getHours() - isExpired.getHours();
    if (timeSpending < 0) {
      ctx.logOut();
      localStorage.removeItem("token");
      localStorage.removeItem("expiration");
    }
  }

  const router = useRouter();
  const dataGether = async (data: {
    name: string;
    email: string;
    password: string;
    score: number;
  }) => {
    axios.post("/api/pj-api", data).then((response) => {
      if (response.status === 200) {
        ctx.logIn();
        let user = response.data.responsedData;
        let userToken = response.data.token;
        setUser(user);
        setToken(userToken);

        router.push("/");
      } else if (response.status === 202) {
        let error = response.data.message;
        alert(error);
      }
    });
  };
  let signMode = ctx.signMode;
  const SignDataHandler = async (data: { email: string; password: string }) => {
    axios.put("/api/pj-api", data).then((response) => {
      console.log(response);
      if (response.status === 203) {
        console.log("succsses");
        let message = response.data.message;
        let userData = response.data.data;
        console.log(userData);
        let signToken = userData.id;
        setToken(signToken);
        setUser(userData);
        setServerError("");
        ctx.logIn();
      } else if (response.status === 206) {
        let message = response.data.message;
        setServerError(message);
        console.log(message);
      }
    });
  };
  return (
    <>
      {signMode === "sign-up" ? (
        <FormItem onDataGetter={dataGether} />
      ) : (
        <SignInForm
          onSignDataGetter={SignDataHandler}
          serverError={serverError}
        />
      )}
    </>
  );
};

export default Authentication;
