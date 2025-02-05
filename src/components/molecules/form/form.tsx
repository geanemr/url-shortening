import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useUrlStore } from "../../../stores/urlStore";
import { twMerge } from "tailwind-merge";

const Form = () => {
  const { fetchShortenUrl, url, setUrl, shortenUrl } = useFetch();
  const { addUrl } = useUrlStore();
  const [emptyLink, setEmptyLink] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (url !== "") {
      setEmptyLink(false);
    }
    if (url === "") {
      setEmptyLink(true);
      return;
    }
    fetchShortenUrl();
    if (!shortenUrl) return;

    addUrl(url, shortenUrl);

    setUrl("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center m-2 lg:m-0 p-8 lg:p-12 bg-no-repeat bg-right-top bg-primary-darkViolet bg-inputMobile lg:bg-inputDesktop rounded-md gap-4 mb-6 mt-2"
      >
        <Input
          placeholder="Shorten a link here..."
          className={twMerge(
            "w-full md:w-auto truncate flex-grow p-3",
            emptyLink && "border-2 border-secondary-red"
          )}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          variant="square-cyan"
          className="w-full md:w-auto truncate lg:break-normal flex-grow lg:flex-grow-0 p-3 lg:px-10"
        >
          Shorten It!
        </Button>
        {emptyLink ? (
          <span className="text-secondary-red justify-center">
            Please add a link
          </span>
        ) : null}
      </form>
    </>
  );
};

export default Form;
