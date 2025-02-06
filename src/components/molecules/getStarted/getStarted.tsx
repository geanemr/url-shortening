import React from "react";
import Button from "../../atoms/button/button";

const GetStarted: React.FC = () => {
  return (
    <section className="flex flex-col py-20 justify-center items-center bg-no-repeat bg-right-top bg-primary-darkViolet bg-boostMobile lg:bg-boostDesktop">
      <h1 className="text-white mb-4 text-3xl font-bold font-poppins">Boost your links today</h1>
      <Button variant="rounded-cyan">Get Started</Button>
    </section>
  );
};

export default GetStarted;
