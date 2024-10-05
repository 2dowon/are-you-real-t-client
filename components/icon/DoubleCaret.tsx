import { IconProps } from "./icon.types";

const DoubleCaret = ({ color = "white", className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_2528_8963)">
        <path
          d="M6.82861 9.14289L10.9715 5.00003L6.82861 0.857178"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.02881 9.14289L5.17167 5.00003L1.02881 0.857178"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2528_8963">
          <rect
            width="11.6"
            height="9.94286"
            fill={color}
            transform="translate(0.200195 0.0285645)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DoubleCaret;
