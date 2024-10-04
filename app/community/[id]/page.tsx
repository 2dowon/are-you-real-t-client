import Caret from "@/components/icon/Caret";
import Link from "next/link";
import CommentSection from "./_components/comment/CommentSection";
import QuestionDetailSection from "./_components/questionDetail/QuestionDetailSection.client";

interface ICommunityQuestionDetailPageProps {
  params: { id: string };
}

const CommunityQuestionDetailPage = ({
  params: { id },
}: ICommunityQuestionDetailPageProps) => {
  return (
    <div className="px-[2rem] pb-[10rem]">
      <Link href="/community">
        <div className="flex items-center gap-x-[1rem] py-[2rem]">
          <Caret />
          <p className="text-detail-r-16">다른 질문 보기</p>
        </div>
      </Link>

      <div className="pb-[1.6rem]">
        <QuestionDetailSection questionId={id} />
      </div>

      <div className="border-t border-gray-800 py-[2.4rem]">
        <CommentSection questionId={id} />
      </div>
    </div>
  );
};

export default CommunityQuestionDetailPage;
