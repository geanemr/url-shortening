import Button from "../../atoms/button/button";
import { Image } from "../../atoms/image/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse lg:gap-1 justify-center my-2 p-6 lg-desktop:p-0 items-center mb-4 lg:mb-8">
      <section className="flex flex-1 justify-center lg-desktop:justify-end">
        <Image src="/illustration-working.svg" alt="Illustration of a person working at a desk" className="m-2 mb:m-0" />
      </section>
      <section className="flex flex-1 flex-col justify-center items-center md:items-start lg:text-left font-poppins">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center md:text-start font-bold text-neutral-veryDarkBlue mb-2">More than just shorter links</h1>
        <h2 className="text-base lg:text-lg text-center md:text-start text-neutral-grayishViolet mb-8 max-w-lg">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </h2>
        <Button variant="rounded-cyan">Get Started</Button>
      </section>
    </div>
  );
};

export default HeroSection;
