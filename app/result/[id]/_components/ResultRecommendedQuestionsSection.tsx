import Caret from "@/components/icon/Caret";
import { IRecommendedQuestion } from "@/hooks/api/questions/useQuestionsResult";
import { mbtiTypeMetaMap } from "@/utils/constants/meta.const";
import Link from "next/link";

const ResultRecommendedQuestionsSection = ({
  recommendQuestions,
}: {
  recommendQuestions: IRecommendedQuestion[];
}) => {
  return (
    <div>
      <p className="text-title-sb-20 mb-[2.4rem]">이건 어떻게 생각해?</p>

      <div className="space-y-[1.6rem]">
        {recommendQuestions.map(({ id, type, content }) => {
          return (
            <Link
              key={`recommended_question_${id}`}
              href={`/community/${id}`}
              className="flex items-center justify-between rounded-[0.8rem] bg-gray-800 px-[2.4rem] py-[1.6rem]"
            >
              <div>
                <p className="text-primary text-detail-r-16 mb-[0.4rem]">
                  {mbtiTypeMetaMap[type].typeText}
                </p>
                <p className="text-detail-r-16">{content}</p>
              </div>

              <Caret className="rotate-180" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ResultRecommendedQuestionsSection;
