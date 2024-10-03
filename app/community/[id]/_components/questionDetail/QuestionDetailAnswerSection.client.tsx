"use client";

import { Button } from "@/components/ui/button";
import { IAnswerDetail } from "@/hooks/api/question/useQuestion";
import { TMbtiType } from "@/utils/constants/meta.const";
import { useState } from "react";
import QuestionDetailAnswerProgress from "./QuestionDetailAnswerProgress";

const QuestionDetailAnswerSection = ({
  type,
  answerList,
  answerCount,
}: {
  type: TMbtiType;
  answerList: IAnswerDetail[];
  answerCount: number;
}) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);

  return (
    <div className="space-y-[3rem]">
      {answerList.map(({ id, content, tag, count }) => {
        const numericAnswerId = Number(id);
        const isSelected = selectedAnswerId === numericAnswerId;

        return (
          <div key={`question_detail_answer_${id}`} className="text-label">
            <div className="text-label mb-[0.8rem] flex items-center gap-x-[0.5rem]">
              <p>{content}</p>
              {selectedAnswerId && <p>({count}명)</p>}
            </div>

            {selectedAnswerId ? (
              <QuestionDetailAnswerProgress
                isSelected={isSelected}
                type={type}
                tagPercentageMap={{ E: 70, I: 30 }}
              />
            ) : (
              <Button
                variant="gray"
                size="md"
                className="w-full text-label font-medium"
                onClick={() => {
                  setSelectedAnswerId(numericAnswerId);
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
