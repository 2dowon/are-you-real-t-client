"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { IQuestion } from "@/hooks/api/questions/useQuestions";
import { useAuthenticationStore } from "@/store/useAuthenticationStore";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

// TODO: 12로 수정 필요
const QUESTION_LIST_COUNT = 2;

interface ISelectedQuestionIdAnswerIdMap {
  [questionId: string]: string;
}

const QuestionsClientPage = ({
  questionList,
}: {
  questionList: IQuestion[];
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
    if (isPending) {
      return;
    }

    startTransition(async () => {
      //   const resultId = await getResult({
      //     answerList: [],
      //   });
      console.log(
        "## answerList",
        Object.values(selectedQuestionIdAnswerIdMap),
        testerId,
        testerMBTI
      );

      const resultId = 1;
      router.replace(`/result/${resultId}`);
    });
  };

  if (!questionId) {
    return null;
  }

  return (
    <div>
      <div className="mx-[2rem] flex items-center space-x-[1rem] justify-center">
        <Progress
          value={(100 / QUESTION_LIST_COUNT) * currentIndex}
          className="my-[5rem] w-[calc(100%_-_6rem)]"
        />
        <div className="text-white text-label flex items-center">
          <p className="text-primary">{currentIndex}</p>
          <p>{`/${QUESTION_LIST_COUNT}`}</p>
        </div>
      </div>

      <div className="flex  flex-col items-center mx-[2.8rem]">
        <p className="text-white text-title">Q{currentIndex}</p>
        <p className="text-white text-title-question mb-[2rem]">{content}</p>

        <div className="w-full space-y-[1rem]">
          {answerList?.map(({ id: answerId, content }) => {
            const isSelected =
              selectedQuestionIdAnswerIdMap[questionId] === answerId;

            return (
              <div
                key={`answer_${answerId}`}
                className={`text-white text-button p-[2rem] rounded-[1rem] border w-full ${
                  isSelected ? "border-primary" : "border-white"
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
          className="text-white text-button mt-[5rem] text-center"
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
        >
          이전
        </div>
      )}

      {currentIndex === QUESTION_LIST_COUNT && (
        <Button
          variant="primary"
          className="text-white text-button mt-[5rem] w-[calc(100%-4rem)] mx-[2rem]"
          onClick={handleLastQuestionClick}
          disabled={
            Object.values(selectedQuestionIdAnswerIdMap).length <
            QUESTION_LIST_COUNT
          }
        >
          결과 받기
        </Button>
      )}
    </div>
  );
};

export default QuestionsClientPage;
