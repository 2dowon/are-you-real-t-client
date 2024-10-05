import { getComments } from "@/hooks/api/comments/useComments";
import Comment from "./Comment";
import CommentInput from "./CommentInput.client";

const CommentSection = async ({ questionId }: { questionId: string }) => {
  const { count, commentList = [] } = await getComments({
    questionId: parseInt(questionId),
  });

  return (
    <>
      <p className="text-label-sb-16 mb-[1rem] text-start">댓글 {count}</p>

      <CommentInput questionId={questionId} />

      <div className="mt-[3.4rem] space-y-[2.5rem]">
        {commentList.map(({ id, mbti, content }) => {
          return <Comment key={id} mbti={mbti} comment={content} />;
        })}
      </div>
    </>
  );
};

export default CommentSection;
