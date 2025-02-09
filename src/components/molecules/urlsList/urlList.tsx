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
      <ul className="flex flex-col w-full px-6">
        {sortedUrls.length > 0
          ? sortedUrls.map((url) => (
              <li
                key={url.id}
                className="flex items-start text-start py-4 flex-col sm-tablet:flex-row sm-tablet:gap-6 font-medium"
              >
                <span className="break-all text-neutral-veryDarkBlue">
                  {url.originalUrl}
                </span>
                <div className="w-full sm-tablet:w-auto items-start flex flex-col sm-tablet:flex-row sm-tablet:items-center sm-tablet:ml-auto gap-2 shrink-0">
                  <span className=" text-primary-cyan break-all my-2">
                    {url.shortenUrl}
                  </span>
                  <Button
                    variant="square-cyan"
                    className={twMerge("w-full sm-tablet:w-fit min-w-20 h-10 sm-tablet:min-w-28", copiedId === url.id && "bg-neutral-veryDarkBlue border-none")}
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
  );
};

export default UrlsList;
