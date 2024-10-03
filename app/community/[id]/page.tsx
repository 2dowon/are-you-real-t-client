import Caret from "@/components/icon/Caret";
import { getQuestion } from "@/hooks/api/question/useQuestion";
import CommentSection from "./_components/comment/CommentSection";
import QuestionDetailSection from "./_components/questionDetail/QuestionDetailSection";

interface ICommunityQuestionDetailPageProps {
  params: { id: string };
}

const CommunityQuestionDetailPage = async ({
  params: { id },
}: ICommunityQuestionDetailPageProps) => {
  const question = await getQuestion({ questionId: Number(id) });

  return (
    <div className="pb-[10rem] px-[2rem]">
      <div className="flex items-center gap-x-[1rem] py-[2rem]">
        <Caret />
        <p className="text-label">다른 질문 보기</p>
      </div>

      <div className="pb-[1rem]">
        <QuestionDetailSection question={question} />
      </div>

      <div className="border-t border-gray-25 py-[2rem]">
        <CommentSection />
      </div>
    </div>
  );
};

export default CommunityQuestionDetailPage;
