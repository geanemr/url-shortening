import React from "react";
import Menu from "../../molecules/menu/menu";
import { LoginOptions } from "../../molecules/loginOptions/loginOptions";

export const Header: React.FC = () => {
  return <section className="flex">
    <Menu />
    <LoginOptions />
  </section>;
};
