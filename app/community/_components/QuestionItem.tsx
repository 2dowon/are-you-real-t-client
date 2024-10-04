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
  voteCount,
  commentCount,
}: {
  postId: number;
  type: TMbtiType;
  questionTitle: string;
  answerList: IAnswer[];
  voteCount: number;
  commentCount: number;
}) => {
  const { typeText } = mbtiTypeMetaMap[type];

  return (
    <Link href={`/community/${postId}`}>
      <div className="rounded-[1.6rem] bg-gray-900 px-[2.3rem] py-[2.5rem]">
        <p className="text-primary text-label-sb-16 mb-[1rem]">{typeText}</p>

        <p className="text-title-sb-22">{questionTitle}</p>

        <div className="my-[2.4rem] space-y-[1.2rem]">
          {answerList.map(({ id, content }) => {
            return (
              <div
                key={`answer_${id}`}
                className="rounded-[0.8rem] bg-gray-800 p-[1.6rem]"
              >
                <p className="text-label-r-16 line-clamp-1 break-all text-gray-200">
                  {content}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-detail-sb-14 flex items-center space-x-[1.6rem] tracking-[0.04%]">
          <div className="flex items-center gap-x-[0.4rem]">
            <Vote className="h-[1.8rem] w-[1.8rem]" />
            <p>투표수 {voteCount.toLocaleString()}회</p>
          </div>
          <div className="flex items-center gap-x-[0.4rem]">
            <Comment className="h-[1.5rem] w-[1.5rem]" />
            <p>댓글 {commentCount.toLocaleString()}개</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuestionItem;
