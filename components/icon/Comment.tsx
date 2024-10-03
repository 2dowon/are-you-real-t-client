import { IconProps } from "./icon.types";

const Comment = ({ color = "#FF53AB", className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={className}
    >
      <path
        d="M11.4863 7.66667C11.4863 8.28333 10.9867 8.775 10.3789 8.775H3.70948L1.48633 11V2.10833C1.48633 1.49167 1.98591 1 2.59374 1H10.3623C10.9784 1 11.4697 1.5 11.4697 2.10833V7.66667H11.4863Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Comment;
