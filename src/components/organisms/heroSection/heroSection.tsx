import Button from "../../atoms/button/button";
import { Image } from "../../atoms/image/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse  lg:gap-2 justify-center mt-2 p-6 lg:p-0">
      <section className="flex flex-1 justify-center lg:justify-end">
        <Image src="/illustration-working.svg" alt="Illustration of a person working at a desk" className="m-2 mb:m-0" />
      </section>
      <section className="flex flex-1 flex-col justify-center text:center items-center lg:items-start lg:text-left font-poppins">
        <h1 className="text-4xl lg:text-7xl font-bold text-neutral-veryDarkBlue mb-2">More than just shorter links</h1>
        <h2 className="text-base lg:text-2xl text-neutral-grayishViolet font-medium mb-8">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </h2>
        <Button variant="rounded-cyan">Get Started</Button>
      </section>
    </div>
  );
};

export default HeroSection;
