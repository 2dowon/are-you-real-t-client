"use client";

import CustomProgress from "@/components/CustomProgress";
import Caret from "@/components/icon/Caret";
import { IQuestionTemp } from "@/hooks/api/questionsTemp/useQuestionsTemp";
import { useAuthenticationStore } from "@/store/useAuthenticationStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  useQuestionsStore,
  useQuestionsStoreActions,
} from "./store/useQuestionsStore";

const QUESTION_LIST_COUNT = 12;

const QuestionsClientPage = ({
  questionList,
}: {
  questionList: IQuestionTemp[];
}) => {
  const router = useRouter();

  const testerId = useAuthenticationStore((state) => state.testerId);
  const testerMBTI = useAuthenticationStore((state) => state.testerMBTI);
  const selectedQuestionIdAnswerIdMap = useQuestionsStore(
    (state) => state.selectedQuestionIdAnswerIdMap
  );
  const { setSelectedQuestionIdAnswerIdMap, reset } =
    useQuestionsStoreActions();

  const [currentIndex, setCurrentIndex] = useState(1);
  const {
    id: questionId,
    content,
    imageUrl = "",
    answerList,
  } = questionList.at(currentIndex - 1) ?? {};

  useEffect(() => {
    if (
      Object.keys(selectedQuestionIdAnswerIdMap).length === QUESTION_LIST_COUNT
    ) {
      router.replace(
        `/result?testerId=${testerId}&mbti=${testerMBTI}&answerId=${Object.values(
          selectedQuestionIdAnswerIdMap
        )}`
      );
    }
  }, [router, selectedQuestionIdAnswerIdMap, testerId, testerMBTI]);

  useEffect(() => {
    if (!testerId || !testerMBTI) {
      router.push(`/login?redirectURI=${encodeURIComponent("/questions")}`);
      return;
    }
  }, [router, testerId, testerMBTI]);

  useEffect(() => {
    return () => {
      reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <p className="text-title-sb-22 mb-[2rem] text-white">{content}</p>

          <div className="relative mb-[1.6rem] h-[16rem] w-[32rem]">
            <Image
              key={imageUrl}
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
                    setSelectedQuestionIdAnswerIdMap({ questionId, answerId });

                    if (currentIndex < QUESTION_LIST_COUNT) {
                      setTimeout(() => {
                        setCurrentIndex(currentIndex + 1);
                      }, 300);
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
    </div>
  );
};

export default QuestionsClientPage;
