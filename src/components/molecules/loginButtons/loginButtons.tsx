import React from "react";
import { Button } from "../../atoms/button/button";

const LoginButtons: React.FC = () => {
  return (
    <section className="flex md:justify-end">
      <Button>Login</Button>
      <Button variant="rounded-cyan">Sign Up</Button>
    </section>
  );
};

export default LoginButtons;
