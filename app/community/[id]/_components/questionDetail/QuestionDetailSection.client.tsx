"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useGetQuestionsId } from "@/hooks/api/questions/useQuestionsId.client";
import { useAuthenticationStore } from "@/store/useAuthenticationStore";
import Image from "next/image";
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
    imageUrl = "",
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

  if (isLoading) {
    return <Skeleton className="h-[40rem] w-full rounded-[1rem]" />;
  }

  return (
    <div>
      <p className="text-title-sb-22 mb-[2rem]">{content}</p>
      <div className="relative mx-auto mb-[2.4rem] h-[16rem] w-[32rem]">
        <Image
          src={imageUrl}
          alt="mbti question"
          fill
          className="object-contain"
        />
      </div>

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
