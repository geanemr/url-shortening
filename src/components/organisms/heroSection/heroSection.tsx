import Button from "../../atoms/button/button";
import { Image } from "../../atoms/image/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg-desktop:flex-row-reverse lg-desktop:gap-2 justify-center my-2 p-6 lg-desktop:p-0 items-center">
      <section className="flex flex-1 justify-center lg-desktop:justify-end">
        <Image src="/illustration-working.svg" alt="Illustration of a person working at a desk" className="m-2 mb:m-0" />
      </section>
      <section className="flex flex-1 flex-col justify-center text:center items-center lg-desktop:items-start lg:text-left font-poppins">
        <h1 className="text-4xl lg-desktop:text-7xl font-bold text-neutral-veryDarkBlue mb-2">More than just shorter links</h1>
        <h2 className="text-base lg:text-2xl text-neutral-grayishViolet mb-8">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </h2>
        <Button variant="rounded-cyan">Get Started</Button>
      </section>
    </div>
  );
};

export default HeroSection;
