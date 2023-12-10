import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { useEffect } from "react";
import "../styles/back.css";
import Navbar from "@/components/navbar";
import { AppProps } from "next/app";
import store from "@/redux/store";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="back-ground">
      <Provider store={store}>
        {" "}
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
export default MyApp;
