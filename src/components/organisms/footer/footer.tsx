import React from "react";
import FooterNavbar from "../../molecules/footerNavbar/footerNavbar";
import { Image } from "../../atoms/image/image";

const Footer: React.FC = () => {

  const icons = "hover:text-primary-cyan fill-current text-white";
  return (
    <footer className="flex flex-col justify-center  md:flex-row bg-neutral-veryDarkBlue p-10">
      <section className="flex justify-center flex-1">
      <h1 className="text-white text-3xl font-bold mb-8 md:mb-0">
        Shortly
      </h1>
      </section>
      <section className="flex-1">
      <FooterNavbar />
      </section>
      <section className="flex justify-center items-start mt-8 md:mt-0 gap-6 flex-1 lg:flex-0">
      <Image src="/icon-facebook.svg"alt="Facebook's Logo" className={icons}/>
      <Image src="/icon-twitter.svg"alt="Twitter's Logo" className={icons}/>
      <Image src="/icon-pinterest.svg"alt="Pinterest's Logo" className={icons}/>
      <Image src="/icon-instagram.svg"alt="Instagram's Logo" className={icons}/>
      </section>
    </footer>
  );
};

export default Footer;
