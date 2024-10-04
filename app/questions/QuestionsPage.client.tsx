"use client";

import CustomProgress from "@/components/CustomProgress";
import Caret from "@/components/icon/Caret";
import { Button } from "@/components/ui/button";
import { IQuestionTemp } from "@/hooks/api/questionsTemp/useQuestionsTemp";
import { getQuestionsTest } from "@/hooks/api/questionsTest/useQuestionsTest";
import { useAuthenticationStore } from "@/store/useAuthenticationStore";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

// TODO: 12로 수정 필요
const QUESTION_LIST_COUNT = 4;

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
    answerList,
  } = questionList.at(currentIndex - 1) ?? {};

  const [selectedQuestionIdAnswerIdMap, setSelectedQuestionIdAnswerIdMap] =
    useState<ISelectedQuestionIdAnswerIdMap>({});

  const [isPending, startTransition] = useTransition();

  const handleLastQuestionClick = () => {
    if (isPending || !testerId || !testerMBTI) {
      return;
    }

    startTransition(async () => {
      const resultId = await getQuestionsTest({
        testerId,
        mbti: testerMBTI,
        answerIdList: Object.values(selectedQuestionIdAnswerIdMap).join(","),
      });
      console.log(
        "## answerIdList",
        Object.values(selectedQuestionIdAnswerIdMap).join(",")
      );

      router.replace(`/result/${resultId}`);
    });
  };

  if (!questionId) {
    return null;
  }

  return (
    <div className="mx-[2.8rem]">
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
        <p className="text-title-sb-22 mb-[3rem] text-white">{content}</p>

        <div className="w-full space-y-[1rem]">
          {answerList?.map(({ id: answerId, content }) => {
            const isSelected =
              selectedQuestionIdAnswerIdMap[questionId] === answerId;

            return (
              <div
                key={`answer_${answerId}`}
                className={`text-detail-r-20 w-full cursor-pointer rounded-[1rem] p-[1.6rem] text-center leading-[150%] text-gray-200 ${
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

      {currentIndex === QUESTION_LIST_COUNT && (
        <Button
          variant="primary"
          className="pc:max-w-[44.4rem] absolute bottom-[4rem] w-[calc(100%-5.6rem)]"
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
