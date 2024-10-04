"use client";

import { useGetQuestionsId } from "@/hooks/api/questions/useQuestionsId.client";
import { useAuthenticationStore } from "@/store/useAuthenticationStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import QuestionDetailAnswerSection from "./QuestionDetailAnswerSection.client";

const QuestionDetailSection = ({ questionId }: { questionId: string }) => {
  const router = useRouter();

  const testerId = useAuthenticationStore((state) => state.testerId);

  const { data: question, isLoading } = useGetQuestionsId({
    params: { questionId, testerId: testerId! },
    enabled: !!testerId,
  });

  const {
    type,
    content = "",
    answerList = [],
    voteCount = 0,
    votedAnswerId,
  } = question ?? {};

  useEffect(() => {
    if (!testerId) {
      router.push(
        `/login?redirectURI=${encodeURIComponent(`/community/${questionId}`)}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoading && !question) {
    return null;
  }

  return (
    <div>
      <p className="text-title-sb-22 mb-[2rem]">{content}</p>

      <QuestionDetailAnswerSection
        type={type}
        votedAnswerId={votedAnswerId}
        answerList={answerList}
        questionId={questionId}
      />

      <p className="text-detail-r-14 mt-[2rem] text-gray-400">
        총 투표수 {voteCount.toLocaleString()}명
      </p>
    </div>
  );
};

export default QuestionDetailSection;
