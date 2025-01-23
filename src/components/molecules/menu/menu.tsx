import React from "react";
import { Button } from "../../atoms/button/button";
import { Image } from "../../atoms/image/image";


const Menu: React.FC = () => {
  return (
    <section className="flex">
      <Image src="/logo.svg" alt="Logo Shortly" className="w-40" />
      <Button>Features</Button>
      <Button>Pricing</Button>
      <Button>Resources</Button>
    </section>
  );
};

export default Menu;
