import React from "react";
import Button from "../../atoms/button/button";

const LoginButtons: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-end items-center">
      <Button>Login</Button>
      <Button variant="rounded-cyan">Sign Up</Button>
    </section>
  );
};

export default LoginButtons;
