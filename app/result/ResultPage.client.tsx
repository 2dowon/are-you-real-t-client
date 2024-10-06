"use client";

import Replay from "@/components/icon/Replay";
import KakaoShareButton from "@/components/KakaoShareButton.client";
import { Button } from "@/components/ui/button";
import { usePostQuestionsResult } from "@/hooks/api/questions/useQuestionResult.client";
import { useAuthenticationStoreActions } from "@/store/useAuthenticationStore";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ResultChangedQuestionCard from "./_components/ResultChangedQuestionCard";
import ResultLoading from "./_components/ResultLoading";
import ResultMbtiCard from "./_components/ResultMbtiCard";
import ResultRecommendedQuestionsSection from "./_components/ResultRecommendedQuestionsSection";

const ResultClientPage = () => {
  const params = useSearchParams();
  const testerId = params.get("testerId");
  const mbti = params.get("mbti");
  const answerId = params.get("answerId");
  const answerIdList = answerId ? answerId.split(",").map(Number) : [];

  const { setTesterNextMBTI } = useAuthenticationStoreActions();

  const { data: result, isLoading } = usePostQuestionsResult({
    payload: {
      testerId: testerId!,
      prevMbti: mbti!,
      answerId: answerIdList,
    },
    enabled: !!(testerId && mbti && answerId),
  });

  const {
    prevMbti = "",
    nextMbti = "",
    description = "",
    imageUrl = "",
    changedQuestions = [],
    recommendQuestions = [],
  } = result ?? {};

  useEffect(() => {
    setTesterNextMBTI(nextMbti);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextMbti]);

  if (isLoading) {
    return <ResultLoading />;
  }

  if (!testerId || !prevMbti || !answerId) {
    return null;
  }

  return (
    <div className="px-[2.8rem] py-[3.2rem]">
      <h1 className="text-title-sb-20 mb-[1.5rem]">검증 완료!</h1>

      <ResultMbtiCard
        prevMbti={prevMbti}
        nextMbti={nextMbti}
        description={description}
        imageUrl={imageUrl}
      />

      <div className="my-[3.6rem] space-y-[2.3rem]">
        {changedQuestions.map((changedQuestion, index) => {
          if (!changedQuestion) {
            return;
          }

          return (
            <ResultChangedQuestionCard
              key={`changedQuestion_${index}`}
              changedQuestion={changedQuestion}
            />
          );
        })}
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
        <KakaoShareButton description={description} />
      </div>

      <div className="border-t border-gray-800 py-[3.2rem]">
        <ResultRecommendedQuestionsSection
          recommendQuestions={recommendQuestions}
        />
      </div>
    </div>
  );
};

export default ResultClientPage;
