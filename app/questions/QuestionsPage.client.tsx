"use client";

import CustomProgress from "@/components/CustomProgress";
import Caret from "@/components/icon/Caret";
import { Button } from "@/components/ui/button";
import { postQuestionsResult } from "@/hooks/api/questions/useQuestionsResult";
import { IQuestionTemp } from "@/hooks/api/questionsTemp/useQuestionsTemp";
import { useAuthenticationStore } from "@/store/useAuthenticationStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

const QUESTION_LIST_COUNT = 12;

interface ISelectedQuestionIdAnswerIdMap {
  [questionId: string]: string;
}

const QuestionsClientPage = ({
  questionList,
}: {
  questionList: IQuestionTemp[];
}) => {
  const router = useRouter();

  const testerId = useAuthenticationStore((state) => state.testerId);
  const testerMBTI = useAuthenticationStore((state) => state.testerMBTI);

  const [currentIndex, setCurrentIndex] = useState(1);
  const {
    id: questionId,
    content,
    imageUrl = "",
    answerList,
  } = questionList.at(currentIndex - 1) ?? {};

  const [selectedQuestionIdAnswerIdMap, setSelectedQuestionIdAnswerIdMap] =
    useState<ISelectedQuestionIdAnswerIdMap>({});

  const [isPending, startTransition] = useTransition();

  const handleLastQuestionClick = () => {
    if (!testerId || !testerMBTI) {
      router.push(`/login?redirectURI=${encodeURIComponent("/questions")}`);
      return;
    }

    if (isPending) {
      return;
    }

    startTransition(async () => {
      const response = await postQuestionsResult({
        testerId,
        prevMbti: testerMBTI,
        answerId: Object.values(selectedQuestionIdAnswerIdMap).map((id) =>
          Number(id)
        ),
      });
      const { data, isSuccess, isError } = response ?? {};
      const { resultId } = data ?? {};

      if (isSuccess && resultId) {
        router.replace(`/result/${resultId}`);
      }

      if (isError) {
        toast.error(
          "MBTI 검증에 오류가 발생했습니다.\n잠시 후 다시 시도해 주세요."
        );
      }
    });
  };

  useEffect(() => {
    if (!testerId || !testerMBTI) {
      router.push(`/login?redirectURI=${encodeURIComponent("/questions")}`);
      return;
    }
  }, [router, testerId, testerMBTI]);

  if (!questionId) {
    return null;
  }

  return (
    <div className="mx-[2.8rem] flex h-[calc(100vh-8rem)] flex-col justify-between">
      <div>
        <div className="flex items-center justify-center space-x-[2rem]">
          <CustomProgress
            value={(100 / QUESTION_LIST_COUNT) * currentIndex}
            className="my-[5rem]"
          />
          <div className="text-label-r-16 flex items-center whitespace-nowrap text-white">
            <p className="text-primary">{currentIndex}</p>
            <p>{` / ${QUESTION_LIST_COUNT}`}</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-title-sb-22 text-white">{content}</p>

          <div className="relative mb-[1rem] h-[15rem] w-[15rem]">
            <Image
              src={imageUrl}
              alt="mbti question"
              fill
              className="object-contain"
            />
          </div>

          <div className="w-full space-y-[1rem]">
            {answerList?.map(({ id: answerId, content }) => {
              const isSelected =
                selectedQuestionIdAnswerIdMap[questionId] === answerId;

              return (
                <div
                  key={`answer_${answerId}`}
                  className={`text-detail-r-20 w-full cursor-pointer rounded-[1rem] p-[1.6rem] text-center text-gray-200 ${
                    isSelected
                      ? "border-primary border bg-gray-900"
                      : "bg-gray-800"
                  }`}
                  onClick={() => {
                    setSelectedQuestionIdAnswerIdMap((prevAnswers) => ({
                      ...prevAnswers,
                      [questionId as string]: answerId,
                    }));

                    if (currentIndex < QUESTION_LIST_COUNT) {
                      setCurrentIndex(currentIndex + 1);
                    }
                  }}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        {currentIndex > 1 && (
          <div
            className="mt-[2rem] flex cursor-pointer items-center gap-x-[0.5rem]"
            onClick={() => {
              setCurrentIndex(currentIndex - 1);
            }}
          >
            <Caret color="#A1A1AA" className="h-[1.4rem] w-[1.4rem]" />
            <p className="text-detail-r-20 text-gray-400 ">이전</p>
          </div>
        )}
      </div>
      {currentIndex === QUESTION_LIST_COUNT && (
        <Button
          variant="primary"
          className="w-full"
          onClick={handleLastQuestionClick}
          disabled={
            Object.values(selectedQuestionIdAnswerIdMap).length <
            QUESTION_LIST_COUNT
          }
        >
          결과 보기
        </Button>
      )}
    </div>
  );
};

export default QuestionsClientPage;
