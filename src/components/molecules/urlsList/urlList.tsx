import { useState } from "react";
import { useUrlStore } from "../../../stores/urlStore";
import Button from "../../atoms/button/button";
import { useCopy } from "../../../hooks/useCopy";
import { twMerge } from "tailwind-merge";

const UrlsList = () => {
  const { urls } = useUrlStore();
  const sortedUrls = urls.sort((a, b) => Number(b.id) - Number(a.id));
  const { handleCopy } = useCopy();
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleClick = (id: number, shortenUrl: string) => {
    handleCopy(shortenUrl);
    setCopiedId(id);
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
                <span className="break-all text-neutral-veryDarkBlue text-lg font-medium">
                  {url.originalUrl}
                </span>
                <div className="flex flex-col md:flex-row items-center md:ml-auto gap-2">
                  <span className=" text-primary-cyan font-semibold break-all my-2">
                    {url.shortenUrl}
                  </span>
                  <Button
                    variant="square-cyan"
                    className={twMerge("md:py-1 px-5 text-xs min-w-24 min-h-10 md:min-w-28", copiedId === url.id && "bg-neutral-veryDarkBlue border-none")}
                    onClick={() => handleClick(url.id, url.shortenUrl)}
                    disabled={copiedId === url.id}
                  >
                    {copiedId !== url.id ? "Copy" : "Copied!"}
                  </Button>
                </div>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

export default UrlsList;
