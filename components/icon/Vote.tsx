import { IconProps } from "./icon.types";

const Vote = ({ color = "#FF53AB", className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      className={className}
    >
      <path
        d="M5.48633 6.5L7.33248 8L13.4863 3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4863 7V10.8889C12.4863 11.5 11.9863 12 11.3752 12H3.59744C2.98633 12 2.48633 11.5 2.48633 10.8889V3.11111C2.48633 2.5 2.98633 2 3.59744 2H9.70855"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Vote;
