import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={twMerge("placeholder-neutral-gray rounded", className)}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
