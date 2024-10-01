import Comment from "./Comment";
import CommentInput from "./CommentInput.client";

const CommentSection = () => (
  <div className="px-[2rem] py-[5rem]">
    <CommentInput />

    <div className="space-y-[1.6rem] mt-[3.2rem]">
      <Comment
        mbti="ESTJ"
        comment="댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용"
      />
      <Comment
        mbti="INFP"
        comment="댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용"
      />
      <Comment
        mbti="ESTJ"
        comment="댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용"
      />
      <Comment
        mbti="INFP"
        comment="댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용"
      />
    </div>
  </div>
);

export default CommentSection;
