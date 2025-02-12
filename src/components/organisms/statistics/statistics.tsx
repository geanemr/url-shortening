import React from "react";
import { Image } from "../../atoms/image/image";
import { twMerge } from "tailwind-merge";

const Statistics: React.FC = () => {
  const h1 = "text-xl font-bold text-neutral-veryDarkBlue my-4 break-all";
  const h2 = "text-base lg:text-lg text-neutral-grayishViolet mb:break-all font-medium text-base text-center lg:text-start";
  const images = "w-8 lg:w-7";
  const imageContainers = "rounded-full items-center justify-center bg-primary-darkViolet p-4";
  const sections = "flex flex-col items-center lg:items-start justify-center gap-2 lg:mx-4 mb-10 md:mb-0";
  const dividers = "bg-primary-cyan h-10 w-2 border border-primary-darkCyan lg:rotate-90 lg:h-8 lg:w-6 mx-6";

  return (
    <div className="flex flex-col justify-center p-2 md:mb-24">
      <section className={twMerge(sections, "lg:items-center md:mb-4")}>
        <h1 className={twMerge(h1, "lg:text-4xl")}>Advanced Statistics</h1>
        <h2 className={twMerge(h2, "lg:text-center lg:max-w-lg")}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </h2>
      </section>
      <div className="flex flex-col lg:flex-row items-center py-4">
      <section className={sections}>
          <div className={imageContainers}>
            <Image
              src="/icon-brand-recognition.svg"
              alt="Brand Recognition Icon"
              className={images}
            />
          </div>
          <h1 className={h1}>Brand Recognition</h1>
          <h2 className={h2}>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </h2>
        </section>
        <span className={dividers}></span>
        <section className={twMerge(sections, "lg:mt-20")}>
          <div className={imageContainers}>
            <Image
              src="/icon-detailed-records.svg"
              alt="Detailed Records Icon"
              className={images}
            />
          </div>
          <h1 className={h1}>Detailed Records</h1>
          <h2 className={h2}>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </h2>
        </section>
        <span className={dividers}></span>
        <section className={twMerge(sections, "lg:mt-40")}>
          <div className={imageContainers}>
            <Image
              src="/icon-fully-customizable.svg"
              alt="Fully Customizable Icon"
              className={images}
            />
          </div>
          <h1 className={h1}>Fully Customizable</h1>
          <h2 className={h2}>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </h2>
        </section>
      </div>
    </div>
  );
};

export default Statistics;
