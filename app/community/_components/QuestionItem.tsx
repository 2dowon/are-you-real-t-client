import Link from "next/link";

const QuestionItem = ({
  postId,
  type,
  questionTitle,
  answerList,
  answerCount,
  commentCount,
}: {
  postId: number;
  type: string;
  questionTitle: string;
  answerList: string[];
  answerCount: number;
  commentCount: number;
}) => {
  return (
    <Link href={`/community/${postId}`}>
      <div className="bg-gray-10 rounded-[1.6rem] p-[2.5rem]">
        <p className="text-primary text-button mb-[0.8rem]">{type}</p>

        <p className="text-gray-100 text-title-question">{questionTitle}</p>

        <div className="space-y-[1.2rem] my-[2.4rem]">
          {answerList.map((answer, index) => {
            return (
              <div
                key={`answer_${index}`}
                className="text-gray-100 bg-gray-18 p-[1.6rem] rounded-[0.8rem]"
              >
                {answer}
              </div>
            );
          })}
        </div>

        <div className="flex items-center space-x-[1.6rem] text-gray-100">
          <p>투표수 {answerCount}회</p>
          <p>댓글 {commentCount}개</p>
        </div>
      </div>
    </Link>
  );
};

export default QuestionItem;
