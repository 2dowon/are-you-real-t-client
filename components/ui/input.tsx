import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex w-full text-white bg-gray-10 rounded-[1rem] text-body1 shadow-sm transition-colors placeholder:text-gray-60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-100 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
