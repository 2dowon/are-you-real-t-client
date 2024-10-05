import Replay from "@/components/icon/Replay";
import KakaoShareButton from "@/components/KakaoShareButton.client";
import { Button } from "@/components/ui/button";
import { getQuestionsResultId } from "@/hooks/api/questions/useQuestionsResult";
import Link from "next/link";
import ResultChangedQuestionCard from "./_components/ResultChangedQuestionCard";
import ResultMbtiCard from "./_components/ResultMbtiCard";
import ResultRecommendedQuestionsSection from "./_components/ResultRecommendedQuestionsSection";

interface IResultPageProps {
  params: { id: string };
}

const ResultPage = async ({ params: { id } }: IResultPageProps) => {
  const result = await getQuestionsResultId({ resultId: id });
  const {
    prevMbti,
    nextMbti,
    description,
    // imageUrl = "",
    changedQuestions,
    recommendQuestions,
  } = result ?? {};

  return (
    <div className="px-[2.8rem] py-[3.2rem]">
      <h1 className="text-title-sb-20 mb-[1.5rem]">검증 완료!</h1>

      <ResultMbtiCard
        prevMbti={prevMbti}
        nextMbti={nextMbti}
        description={description}
        imageUrl={""}
      />

      <div className="my-[3.6rem] space-y-[2.3rem]">
        {changedQuestions.map((changedQuestion, index) => (
          <ResultChangedQuestionCard
            key={`changedQuestion_${index}`}
            changedQuestion={changedQuestion}
          />
        ))}
      </div>

      <div className="mb-[2.8rem] space-y-[1.6rem]">
        <Button variant="gray" size="md" className="w-full" asChild>
          <Link href={`/login?redirectURI=${encodeURIComponent("/questions")}`}>
            <div className="flex items-center">
              <Replay className="mr-[0.5rem]" />
              다시 검증하기
            </div>
          </Link>
        </Button>
        <KakaoShareButton resultId={id} />
      </div>

      <div className="border-t border-gray-800 py-[3.2rem]">
        <ResultRecommendedQuestionsSection
          recommendQuestions={recommendQuestions}
        />
      </div>
    </div>
  );
};

export default ResultPage;
