import { IQuestionDetail } from "@/hooks/api/question/useQuestion";
import QuestionDetailAnswerSection from "./QuestionDetailAnswerSection.client";

const QuestionDetailSection = ({ question }: { question: IQuestionDetail }) => {
  const { content, answerList, answerCount, type } = question;
  return (
    <div>
      <p className="text-title font-semibold mb-[2rem]">{content}</p>

      <QuestionDetailAnswerSection
        type={type}
        answerList={answerList}
        answerCount={answerCount}
      />

      <p className="text-label mt-[2rem]">
        답변 참여자 {answerCount.toLocaleString()}명
      </p>
    </div>
  );
};

export default QuestionDetailSection;
