import FormItem from "../../components/form";

const Authentication = () => {
  const dataGether = (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log(data);
  };

  return <FormItem onDataGetter={dataGether} />;
};
export default Authentication;
