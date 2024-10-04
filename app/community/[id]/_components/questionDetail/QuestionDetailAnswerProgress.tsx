import { mbtiTypeMetaMap, TMbtiType } from "@/utils/constants/meta.const";

const QuestionDetailAnswerProgress = ({
  isSelected,
  type,
  tagPercentageMap,
}: {
  isSelected: boolean;
  type: TMbtiType;
  tagPercentageMap: { [tag: string]: number };
}) => {
  const { typeList } = mbtiTypeMetaMap[type];

  return (
    <div className="relative h-[4.8rem] w-full rounded-[0.8rem] bg-gray-900">
      <div className="flex h-full w-full items-center justify-between px-[2rem]">
        {typeList.map((type, index) => {
          const percentage = tagPercentageMap[type];

          return (
            <div key={type} className="z-10 flex items-center gap-x-[1rem]">
              {index === 1 && <p className="text-label-r-16">{percentage}%</p>}
              <p className="text-detail-r-20">{type}</p>
              {index === 0 && <p className="text-label-r-16">{percentage}%</p>}
            </div>
          );
        })}
      </div>

      {typeList.map((type, index) => {
        const percentage = tagPercentageMap[type];
        return (
          <div
            key={type}
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
