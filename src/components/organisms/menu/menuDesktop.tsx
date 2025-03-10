import React from "react";
import InfoButtons from "../../molecules/infoButtons/infoButtons";
import LoginButtons from "../../molecules/loginButtons/loginButtons";

const MenuDesktop: React.FC = () => {
  return (
    <section className="flex flex-wrap items-center justify-center md:justify-between h-fit p-2">
      <InfoButtons />
      <LoginButtons />
    </section>
  );
};
export default MenuDesktop;
