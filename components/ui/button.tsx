import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-sm hover:bg-primary-active disabled:bg-primary-disabled disabled:text-[#F178B6]",
        gray: "bg-gray-18 text-white shadow-sm hover:bg-gray-10 disabled:bg-gray-25 disabled:text-gray-60",
      },
      size: {
        sm: "rounded-[0.4rem] py-[0.8rem] px-[1.6rem] text-label font-medium",
        md: "rounded-[0.8rem] p-[1.6rem] text-label font-medium",
        lg: "rounded-[0.8rem] p-[1.6rem] text-button font-semibold",
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
