import Comment from "@/components/icon/Comment";
import Vote from "@/components/icon/Vote";
import { IAnswer } from "@/hooks/api/questions/useQuestions";
import { mbtiTypeMetaMap, TMbtiType } from "@/utils/constants/meta.const";
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
  type: TMbtiType;
  questionTitle: string;
  answerList: IAnswer[];
  answerCount: number;
  commentCount: number;
}) => {
  const { typeText } = mbtiTypeMetaMap[type];

  return (
    <Link href={`/community/${postId}`}>
      <div className="bg-gray-10 rounded-[1.6rem] p-[2.5rem]">
        <p className="text-primary text-label font-bold mb-[0.8rem]">
          {typeText}
        </p>

        <p className="text-title-question">{questionTitle}</p>

        <div className="space-y-[1.2rem] my-[2.4rem]">
          {answerList.map(({ id, content }) => {
            return (
              <div
                key={`answer_${id}`}
                className="bg-gray-18 p-[1.6rem] rounded-[0.8rem]"
              >
                <p className="break-all text-label line-clamp-1">{content}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center space-x-[1.6rem] text-[1.4rem] font-semibold tracking-[0.04%]">
          <div className="flex items-center gap-x-[0.4rem]">
            <Vote />
            <p>투표수 {answerCount}회</p>
          </div>
          <div className="flex items-center gap-x-[0.4rem]">
            <Comment />
            <p>댓글 {commentCount}개</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuestionItem;
