"use client";

import QuestionDetailAnswerProgress from "@/app/_components/QuestionDetailAnswerProgress";
import { Button } from "@/components/ui/button";
import {
  IAnswerDetail,
  questionsIdApiQueryKey,
} from "@/hooks/api/questions/useQuestionsId.client";
import { postVote } from "@/hooks/api/vote/useVote";
import { useAuthenticationStore } from "@/store/useAuthenticationStore";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

const QuestionDetailAnswerSection = ({
  questionId,
  // type,
  voteCount,
  votedAnswerId,
  answerList,
}: {
  questionId: string;
  // type: TMbtiType;
  voteCount: number;
  votedAnswerId: number | null;
  answerList: IAnswerDetail[];
}) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const testerId = useAuthenticationStore((state) => state.testerId);
  const testerMBTI = useAuthenticationStore((state) => state.testerMBTI);

  const [isPending, startTransition] = useTransition();

  const handleAnswerClick = (answerId: number) => {
    if (!testerId || !testerMBTI) {
      router.push(
        `/login?redirectURI=${encodeURIComponent(`/community/${questionId}`)}`
      );
      return;
    }

    if (isPending || !answerId) {
      return;
    }

    startTransition(async () => {
      const response = await postVote({
        testerId,
        questionId: parseInt(questionId),
        answerId,
        mbti: testerMBTI,
      });
      const { isSuccess, isError } = response ?? {};

      if (isSuccess) {
        queryClient.invalidateQueries({ queryKey: [questionsIdApiQueryKey] });
      }
      if (isError) {
        toast.error("투표에 오류가 발생했습니다.\n잠시 후 다시 시도해 주세요.");
      }
    });
  };

  return (
    <div className="space-y-[3rem]">
      {answerList.map(({ id: answerId, content, selectCount }) => {
        // TODO: BE에서 countMeta 데이터 넘어오면 그때 처리
        // const { total, tag1, tag2 } = countMeta ?? {};
        const isSelected = votedAnswerId === answerId;

        return (
          <div
            key={`question_detail_answer_${answerId}`}
            className="text-label"
          >
            <div
              className={`text-detail-sb-16 mb-[0.8rem] ${
                votedAnswerId && !isSelected ? "text-gray-600" : ""
              }`}
            >
              <span>{content}</span>
              {votedAnswerId && (
                <span className="ml-[0.5rem]">({selectCount}명)</span>
              )}
            </div>

            {votedAnswerId ? (
              <QuestionDetailAnswerProgress
                voteCount={voteCount}
                selectCount={selectCount}
                isSelected={isSelected}
              />
            ) : (
              // <QuestionDetailAnswerTagProgress
              //   isSelected={isSelected}
              //   type={type}
              //   totalCount={total!}
              //   tag1={tag1!}
              //   tag2={tag2!}
              // />
              <Button
                variant="gray"
                size="md"
                className="text-detail-sb-16 h-[4.8rem] w-full"
                onClick={() => {
                  handleAnswerClick(answerId);
                }}
              >
                선택하기
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QuestionDetailAnswerSection;
