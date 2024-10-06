import QuestionDetailAnswerProgress from "@/app/_components/QuestionDetailAnswerProgress";
import DoubleCaret from "@/components/icon/DoubleCaret";
import { IChangedQuestion } from "@/hooks/api/questions/useQuestionResult.client";

const ResultChangedQuestionCard = ({
  changedQuestion,
}: {
  changedQuestion: IChangedQuestion;
}) => {
  const { prevType, nextType, title, question } = changedQuestion;
  const isChanged = prevType !== nextType;

  const { content, votedAnswerId, answerList, voteCount } = question;

  return (
    <div className="cursor-default">
      <div className="mb-[1.3rem] flex items-center">
        <div className="text-detail-sb-16 flex items-center px-[1rem]">
          <p>{prevType}</p>
          <DoubleCaret className="mx-[0.5rem]" />
          <p className={isChanged ? "text-primary" : ""}>{nextType}</p>
        </div>
        <div className="mr-[1.5rem] h-[1.3rem] w-[0.2rem] bg-gray-700" />
        <p className="text-label-sb-16">{title}</p>
      </div>

      <div className="rounded-[0.8rem] bg-gray-900 p-[2rem]">
        <p className="text-title-sb-22 mb-[2rem]">{content}</p>

        <div className="space-y-[2rem]">
          {answerList.map(({ id: answerId, content, selectCount }) => {
            // TODO: BE에서 countMeta 데이터 넘어오면 그때 처리
            // const { total, tag1, tag2 } = countMeta ?? {};
            const isSelected = votedAnswerId === answerId;

            return (
              <div
                key={`question_detail_answer_${answerId}`}
                className="text-label"
              >
                <p
                  className={`text-detail-r-16 mb-[0.8rem] flex items-center gap-x-[0.5rem] ${
                    isSelected ? "" : "text-gray-400"
                  }`}
                >
                  {content}
                </p>

                <QuestionDetailAnswerProgress
                  voteCount={voteCount}
                  selectCount={selectCount}
                  isSelected={isSelected}
                  className="!h-[4rem] !bg-black"
                />
                {/* <QuestionDetailAnswerTagProgress
                  isSelected={isSelected}
                  type={type}
                  totalCount={total!}
                  tag1={tag1!}
                  tag2={tag2!}
                  className="!h-[4rem] !bg-black"
                /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultChangedQuestionCard;
