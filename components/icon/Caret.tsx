import { IconProps } from "./icon.types";

const Caret = ({ color = "white", className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      className={className}
    >
      <path
        d="M8.5 15L1.5 8L8.5 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Caret;
