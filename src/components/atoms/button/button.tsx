import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "gray" | "rounded-cyan" | "square-cyan";
}

const variantClasses = {
  gray: "text-neutral-grayishViolet hover:text-black",
  "rounded-cyan": "bg-primary-cyan text-white rounded-full",
  "square-cyan": "bg-primary-cyan text-white rounded",
};

export const Button = ({
  children,
  onClick,
  variant = "gray",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        variantClasses[variant],
        "py-2 px-4 cursor-pointer font-poppins font-bold"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
