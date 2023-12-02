import { MongoClient } from "mongodb";
import FormItem from "../../components/form";
import axios from "axios";
const Authentication = () => {
  const dataGether = async (data: {
    name: string;
    email: string;
    password: string;
    score: number;
  }) => {
    const response = await axios.post("/api/pj-api", data);
  };

  return <FormItem onDataGetter={dataGether} />;
};

export default Authentication;
