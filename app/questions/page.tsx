import { getQuestions } from "@/hooks/api/questions/useQuestions";
import QuestionsClientPage from "./QuestionsPage.client";

const QuestionsPage = async () => {
  const questionList = await getQuestions();

  return (
    <div>
      <QuestionsClientPage questionList={questionList} />
    </div>
  );
};

export default QuestionsPage;
