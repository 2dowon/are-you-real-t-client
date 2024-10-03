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
    <div className="rounded-[0.8rem] relative h-[5.6rem] w-full bg-gray-10">
      <div className="flex w-full justify-between px-[2rem] h-full items-center">
        {typeList.map((type, index) => {
          const percentage = tagPercentageMap[type];

          return (
            <div className="text-label z-10 flex items-center gap-x-[1rem]">
              {index === 1 && <p>{percentage}%</p>}
              {type}
              {index === 0 && <p>{percentage}%</p>}
            </div>
          );
        })}
      </div>

      {typeList.map((type, index) => {
        const percentage = tagPercentageMap[type];
        return (
          <div
            key={type}
            className={`h-full rounded-[0.8rem] absolute top-0 ${
              index === 0 ? "left-0" : "right-0"
            } ${
              percentage >= 50 ? (isSelected ? "bg-primary" : "bg-gray-25") : ""
            }`}
            style={{ width: `${percentage}%` }}
          />
        );
      })}
    </div>
  );
};

export default QuestionDetailAnswerProgress;
