import { getQuestionsTemp } from "@/hooks/api/questionsTemp/useQuestionsTemp";
import QuestionsClientPage from "./QuestionsPage.client";

const QuestionsPage = async () => {
  const questionList = await getQuestionsTemp();

  return (
    <div>
      <QuestionsClientPage questionList={questionList} />
    </div>
  );
};

export default QuestionsPage;
