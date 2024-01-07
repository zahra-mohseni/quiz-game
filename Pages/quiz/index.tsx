import QuestionCard from "@/components/question-card";
const Quiz: React.FC = () => {
  const data: {
    question: string;
    options: string[];
    answer: string;
    id: string;
  }[] = [
    {
      question: "Database is an organized collection of related………",
      options: ["Data", "Modules", " Programs", " None of the above"],
      answer: "Data",
      id: "a1",
    },
    {
      question: "How to write the database schema?",
      options: ["HLL", " DML", " DDL", " None of the above"],
      answer: "DDL",
      id: "a2",
    },
    {
      question: "How to write the database schema?",
      options: ["HLL", " DML", " DDL", " None of the above"],
      answer: "DDL",
      id: "a2",
    },
  ];

  return (
    <>
      <QuestionCard data={data} />
    </>
  );
};
export default Quiz;
