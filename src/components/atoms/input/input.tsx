import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  className
}) => {
  return (
    <input
      placeholder={placeholder}
      className={twMerge("placeholder-neutral-gray font-poppins rounded", className)}
    />
  );
};
export default Input;
