const QuestionDetailAnswerProgress = ({
  voteCount,
  selectCount,
  isSelected,
  className = "",
}: {
  voteCount: number;
  selectCount: number;
  isSelected: boolean;
  className?: string;
}) => {
  const percentage =
    voteCount > 0
      ? Math.min(parseFloat(((selectCount / voteCount) * 100).toFixed(1)), 100)
      : 0;

  return (
    <div
      className={`relative flex h-[4.8rem] w-full items-center justify-end rounded-[0.8rem] bg-gray-900 ${className}`}
    >
      <p
        className={`text-label-r-16 z-[1] mr-[1.4rem] ${
          isSelected ? "text-white" : "text-gray-600"
        }`}
      >
        {percentage}%
      </p>
      <div
        className={`absolute top-0 h-full rounded-[0.8rem] ${
          percentage >= 50 ? (isSelected ? "bg-primary" : "bg-gray-800") : ""
        }`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default QuestionDetailAnswerProgress;
