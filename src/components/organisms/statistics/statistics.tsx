import React from "react";
import { Image } from "../../atoms/image/image";
import { twMerge } from "tailwind-merge";

const Statistics: React.FC = () => {
  const h1 =
    "text-3xl lg:text-base font-semibold text-neutral-veryDarkBlue my-4 break-all";
  const h2 = "text-base lg:text-sm text-neutral-grayishViolet break-words";
  const images = "justify-self-center p-4";
  const imageContainers = "rounded-full  bg-primary-darkViolet h-20 w-20";
  const sections = "flex flex-col items-center justify-center";
  const dividers =
    "bg-primary-cyan h-12 w-2 border border-primary-darkCyan md:-rotate-90 md:h-6";

  return (
    <div className="flex flex-col justify-center font-poppins">
      <section className={sections}>
        <h1 className={twMerge(h1, "lg:text-3xl")}>Advanced Statistics</h1>
        <h2 className={h2}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </h2>
      </section>
      <div className="flex flex-col md:flex-row gap-2 items-center py-4">
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
        <section className={twMerge(sections, "md:mt-14")}>
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
        <section className={twMerge(sections, "md:mt-28")}>
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
