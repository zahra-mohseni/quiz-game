import { useRouter } from "next/router";
import FormItem from "../../components/form";
import axios from "axios";
import { useState, useEffect } from "react";

const Authentication = () => {
  const [user, setUser] = useState<{
    id: string;
    name: string;
    email: string;
    score: number;
  }>();
  const [token, setToken] = useState<string>("");
  console.log(user);

  if (typeof window !== "undefined" && window.localStorage && token !== "") {
    let token = localStorage.setItem("token", user!.id);
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 1);
    localStorage.setItem("expiration", expirationTime.toISOString());
  }

  const router = useRouter();
  const dataGether = async (data: {
    name: string;
    email: string;
    password: string;
    score: number;
  }) => {
    axios.post("/api/pj-api", data).then((response) => {
      let user = response.data.responsedData;
      let userToken = response.data.token;
      setUser(user);
      setToken(userToken);
      router.push("/");
    });
  };

  return <FormItem onDataGetter={dataGether} />;
};

export default Authentication;
