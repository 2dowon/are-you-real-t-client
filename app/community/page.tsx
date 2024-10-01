import QuestionItem from "./_components/QuestionItem";

const CommunityPage = () => {
  return (
    <div>
      <h1 className="text-white text-title-question mb-[1rem]">
        토론하러 가기
      </h1>

      <div className="mx-[2rem] flex flex-col gap-y-[2.4rem]">
        <QuestionItem
          postId={1}
          type="S/N"
          questionTitle="질문 내용"
          answerList={["A", "B"]}
          answerCount={1000}
          commentCount={100}
        />

        <QuestionItem
          postId={1}
          type="S/N"
          questionTitle="질문 내용"
          answerList={["A", "B"]}
          answerCount={1000}
          commentCount={100}
        />

        <QuestionItem
          postId={1}
          type="S/N"
          questionTitle="질문 내용"
          answerList={["A", "B"]}
          answerCount={1000}
          commentCount={100}
        />

        <QuestionItem
          postId={1}
          type="S/N"
          questionTitle="질문 내용"
          answerList={["A", "B"]}
          answerCount={1000}
          commentCount={100}
        />
      </div>
    </div>
  );
};

export default CommunityPage;
