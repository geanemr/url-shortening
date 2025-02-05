import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gray" | "rounded-cyan" | "square-cyan";
}

const variantClasses = {
  gray: "text-neutral-grayishViolet hover:text-black py-2 px-4",
  "rounded-cyan": "bg-primary-cyan text-white rounded-full py-4 px-8 lg:py-2 lg:px-4 text-lg lg:text-base border border-primary-darkCyan hover:bg-neutral-aquamarine",
  "square-cyan": "bg-primary-cyan text-white rounded py-2 px-4 text-sm lg:text-base border border-primary-darkCyan hover:bg-neutral-aquamarine",
};

 const Button = ({ children, variant = "gray", className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        variantClasses[variant],
        className,
        "cursor-pointer font-poppins font-bold w-fit disabled:bg-neutral-aquamarine disabled:border-none"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
