import React, { useState } from "react";
import InfoButtons from "../../molecules/infoButtons/infoButtons";
import LoginButtons from "../../molecules/loginButtons/loginButtons";
import { Image } from "../../atoms/image/image";

const MenuMobile: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between p-6">
        <Image src="/logo.svg" alt="Shortly's logo" className="w-28" />
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? (
            <Image
              src="/icon-burger-menu.svg"
              alt="Close menu"
              className="w-8 rotate-90"
            />
          ) : (
            <Image
              src="/icon-burger-menu.svg"
              alt="Open menu"
              className="w-8"
            />
          )}
        </button>
      </div>
      {mobileMenu && (
        <div className="flex flex-col items-center text-center mx-4">
          <nav className="absolute inset-x-0 top-20 mx-4 flex flex-col justify-center items-center text-center bg-primary-darkViolet rounded-lg py-10">
            <InfoButtons />
            <span className="bg-white w-3/4 my-4" style={{ height: '0.5px' }}></span>
            <LoginButtons />
          </nav>
        </div>
      )}
    </>
  );
};

export default MenuMobile;