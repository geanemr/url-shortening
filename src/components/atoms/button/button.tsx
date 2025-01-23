import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 rounded cursor-pointer font-poppins fontWeight-bold"
    >
      {children}
    </button>
  );
};
