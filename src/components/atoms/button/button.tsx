import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  children: ReactNode;
  variant?: "gray" | "rounded-cyan" | "square-cyan";
  className?:string;
}

const variantClasses = {
  gray: "text-neutral-grayishViolet hover:text-black py-2 px-4",
  "rounded-cyan": "bg-primary-cyan text-white rounded-full py-4 px-8 lg:py-2 lg:px-4 text-lg lg:text-base hover:bg-neutral-aquamarine",
  "square-cyan": "bg-primary-cyan text-white rounded py-2 px-4 text-lg lg:text-base hover:bg-neutral-aquamarine",
};

export const Button = ({
  children,
  variant = "gray",
  className,
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        variantClasses[variant],className,
        "cursor-pointer font-poppins font-bold w-fit"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
