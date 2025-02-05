import { useState } from "react";
import { useUrlStore } from "../../../stores/urlStore";
import Button from "../../atoms/button/button";

const UrlsList = () => {
  const { urls } = useUrlStore();
  const sortedUrls = urls.sort((a, b) => Number(b.id) - Number(a.id));
  const [copy, setCopy] = useState(false);

  const handleClick = () => {
    setCopy(true);
  };

  return (
    <section className="flex font-poppins">
      <ul className="flex flex-col w-full">
        {sortedUrls.length > 0
          ? sortedUrls.map((url) => (
              <li
                key={url.id}
                className="flex items-center py-4 flex-col md:flex-row md:gap-6 md:px-10"
              >
                <span className="break-all text-neutral-veryDarkBlue text-lg">
                  {url.originalUrl}
                </span>
                <div className="flex flex-col md:flex-row items-center md:ml-auto gap-2">
                <span className=" text-primary-cyan font-semibold break-all my-2">
                  {url.shortenUrl}
                </span>
                {!copy ? (
                  <Button
                    variant="square-cyan"
                    className="md:py-1 px-5 text-xs"
                    onClick={handleClick}
                  >
                    Copy
                  </Button>
                ) : (
                  <Button
                    variant="square-cyan"
                    className="md:py-1 px-5 text-xs"
                    disabled={copy}
                  >
                    Copied!
                  </Button>
                )}
                </div>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

export default UrlsList;
