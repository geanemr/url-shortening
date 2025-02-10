import React from "react";
import Button from "../../atoms/button/button";

const LoginButtons: React.FC = () => {
  return (
    <section className="flex w-full flex-col px-2 md:w-auto md:px-0 md:flex-row md:justify-end items-center">
      <Button>Login</Button>
      <Button variant="rounded-cyan" className="w-full">Sign Up</Button>
    </section>
  );
};

export default LoginButtons;
