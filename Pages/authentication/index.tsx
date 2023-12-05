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
    axios.post("/api/pj-api", data).then((response) => {
      console.log(response);
      console.log(response.data.responsedData);
    });
  };

  return <FormItem onDataGetter={dataGether} />;
};

export default Authentication;
