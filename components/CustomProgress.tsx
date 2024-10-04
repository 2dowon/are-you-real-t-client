import TLogo from "./icon/TLogo";

const CustomProgress = ({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) => {
  return (
    <div
      className={`relative h-[0.8rem] w-full rounded-full bg-gray-200 ${className}`}
    >
      <div
        className="bg-primary h-full transition-all duration-300 ease-linear"
        style={{ width: `${value}%` }}
      />

      <div
        className="absolute top-1/2 -translate-y-1/2 transform transition-all duration-300 ease-linear"
        style={{ left: `${value}%`, transform: "translate(-50%, -50%)" }}
      >
        <TLogo />
      </div>
    </div>
  );
};

export default CustomProgress;
