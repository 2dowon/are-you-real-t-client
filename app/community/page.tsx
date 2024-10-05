import { getQuestions } from "@/hooks/api/questions/useQuestions";
import QuestionItem from "./_components/QuestionItem";

const CommunityPage = async () => {
  const questionList = await getQuestions();
  console.log("## questionList", questionList);

  return (
    <div>
      <h1 className="text-title-sb-20 mx-[2rem] mb-[2.4rem] mt-[3.2rem] text-white">
        토론하러 가기
      </h1>

      <div className="mx-[2rem] mb-[10rem] flex flex-col gap-y-[2.4rem]">
        {questionList.map(
          ({ id, type, content, answerList, voteCount, commentCount }) => {
            return (
              <QuestionItem
                key={`question_${id}`}
                postId={Number(id)}
                type={type}
                questionTitle={content}
                answerList={answerList}
                voteCount={voteCount}
                commentCount={commentCount}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default CommunityPage;
