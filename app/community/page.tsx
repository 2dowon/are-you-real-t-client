import { getQuestions } from "@/hooks/api/questions/useQuestions";
import QuestionItem from "./_components/QuestionItem";

const CommunityPage = async () => {
  const questionList = await getQuestions();

  return (
    <div>
      <h1 className="text-white text-title-question mt-[3.2rem] mb-[2.4rem] mx-[2rem]">
        토론하러 가기
      </h1>

      <div className="mx-[2rem] flex flex-col gap-y-[2.4rem]">
        {questionList.map(
          ({ id, type, content, answerList, answerCount, commentCount }) => {
            return (
              <QuestionItem
                key={`question_${id}`}
                postId={Number(id)}
                type={type}
                questionTitle={content}
                answerList={answerList}
                answerCount={answerCount}
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
