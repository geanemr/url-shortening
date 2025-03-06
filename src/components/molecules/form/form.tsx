import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useUrlStore } from "../../../stores/urlStore";
import { twMerge } from "tailwind-merge";

const Form = () => {
  const { fetchShortenUrl, url, setUrl, shortenUrl, error } = useFetch();
  const { addUrl } = useUrlStore();
  const [emptyLink, setEmptyLink] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (url) {
      setEmptyLink(false);
    }
    if (!url) {
      setEmptyLink(true);
      return;
    }
    await fetchShortenUrl();
    if (!shortenUrl) return;

    addUrl(url, shortenUrl);

    setUrl("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col relative m-2 lg:m-0 p-8 lg:p-12 bg-no-repeat bg-right-top bg-primary-darkViolet bg-inputMobile lg:bg-inputDesktop rounded-md mb-6 lg:mb-20 mt-4"
      >
        <div className="flex flex-wrap items-center gap-4 justify-center">
          <Input
            placeholder="Shorten a link here..."
            className={twMerge(
              "w-full md:w-auto truncate flex-grow p-3 lg:p-4",
              emptyLink && "border-2 border-secondary-red"
            )}
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setEmptyLink(false);
            }}
          />
          <Button
            variant="square-cyan"
            className="w-full md:w-auto truncate lg:break-normal flex-grow lg:flex-grow-0 p-3 lg:p-4 lg:px-10"
          >
            Shorten It!
          </Button>
        </div>
        {emptyLink && (
          <span className="mt-2 text-secondary-red md:text-left font-medium text-sm">
            Please add a link
          </span>
        )}
        {error && (
          <span className="mt-2 text-secondary-red md:text-left font-medium text-sm">
            {error}
          </span>
        )}
      </form>
    </>
  );
};

export default Form;
