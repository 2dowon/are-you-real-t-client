import { IconProps } from "./icon.types";

const Kakao = ({ color = "#391B1B", className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 19.8773C17.2464 19.8773 21.5 16.0992 21.5 11.4387C21.5 6.77811 17.2464 3 12 3C6.75362 3 2.5 6.77811 2.5 11.4387C2.5 13.5604 3.38231 15.5013 4.83938 16.9841C4.72419 18.2089 4.34419 19.5518 3.92381 20.5596C3.83 20.7839 4.01169 21.0346 4.248 20.996C6.927 20.55 8.51944 19.8653 9.21175 19.5084C10.1211 19.7555 11.0586 19.8796 12 19.8773Z"
        fill={color}
      />
    </svg>
  );
};

export default Kakao;
