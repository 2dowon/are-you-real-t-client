import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-sm pc:hover:bg-primary-active disabled:bg-primary-disabled-200 disabled:text-primary-disabled-100",
        gray: "bg-gray-800 text-white shadow-sm pc:hover:bg-gray-900 disabled:bg-gray-700 disabled:text-gray-400",
      },
      size: {
        sm: "rounded-[0.4rem] py-[0.8rem] px-[1.6rem] text-button-sb-14",
        md: "rounded-[0.8rem] p-[1.6rem] text-label-sb-16",
        lg: "rounded-[0.8rem] p-[1.6rem] text-button-sb-24",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
