import React from "react";
import  Button  from "../../atoms/button/button";
import { Image } from "../../atoms/image/image";
import useScreenSize from "../../../hooks/useScreenSize";

const InfoButtons: React.FC = () => {
  const { isWeb } = useScreenSize();
  return (
    <header className="flex flex-col md:flex-row items-center">
      {isWeb ? (
        <Image src="/logo.svg" alt="Shortly's logo" className="w-35" />
      ) : null}
      <Button>Features</Button>
      <Button>Pricing</Button>
      <Button>Resources</Button>
    </header>
  );
};

export default InfoButtons;
