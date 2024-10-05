import { ITagCountMeta } from "@/hooks/api/questions/useQuestionsId.client";
import { TMbtiType } from "@/utils/constants/meta.const";

const QuestionDetailAnswerProgress = ({
  isSelected,
  type,
  totalCount,
  tag1,
  tag2,
  className = "",
}: {
  isSelected: boolean;
  type: TMbtiType;
  totalCount: number;
  tag1: ITagCountMeta;
  tag2: ITagCountMeta;
  className?: string;
}) => {
  return (
    <div
      className={`relative h-[4.8rem] w-full rounded-[0.8rem] bg-gray-900 ${className}`}
    >
      <div className="flex h-full w-full items-center justify-between px-[2rem]">
        {[tag1, tag2].map((tag, index) => {
          const { tag: tagName, count } = tag;
          const percentage =
            totalCount > 0
              ? parseFloat(((count / totalCount) * 100).toFixed(1))
              : 0;

          return (
            <div key={type} className="z-10 flex items-center gap-x-[1rem]">
              {index === 1 && <p className="text-label-r-16">{percentage}%</p>}
              <p className="text-detail-r-20">{tagName}</p>
              {index === 0 && <p className="text-label-r-16">{percentage}%</p>}
            </div>
          );
        })}
      </div>

      {[tag1, tag2].map((tag, index) => {
        const { tag: tagName, count } = tag;
        const percentage =
          totalCount > 0
            ? parseFloat(((count / totalCount) * 100).toFixed(1))
            : 0;

        return (
          <div
            key={tagName}
            className={`absolute top-0 h-full rounded-[0.8rem] ${
              index === 0 ? "left-0" : "right-0"
            } ${
              percentage >= 50
                ? isSelected
                  ? "bg-primary"
                  : "bg-gray-800"
                : ""
            }`}
            style={{ width: `${percentage}%` }}
          />
        );
      })}
    </div>
  );
};

export default QuestionDetailAnswerProgress;
