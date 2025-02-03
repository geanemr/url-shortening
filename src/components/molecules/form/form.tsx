import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

const Form = () => {
  const { fetchShortenUrl, url, setUrl, shortenUrl } = useFetch();
  const { setItem, getItem } = useLocalStorage();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchShortenUrl();
    if (!shortenUrl) return;

    const storedUrls =
      getItem<{ id: string; url: string }[]>("shortenUrls") || [];
    const lastId =
      storedUrls.length > 0 ? Number(storedUrls[storedUrls.length - 1].id) : 0;
    const newId = lastId + 1;

    const newUrl = {
      id: newId,
      url: shortenUrl,
    };
    const updatedUrls = [...storedUrls, newUrl];

    setItem("shortenUrls", updatedUrls);
    setUrl("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-center m-2 lg:m-0 p-8 lg:p-12 bg-no-repeat bg-right-top bg-primary-darkViolet bg-inputMobile lg:bg-inputDesktop rounded-md gap-4 mb-6 mt-2"
    >
      <Input
        placeholder="Shorten a link here..."
        className="w-full md:w-auto truncate flex-grow p-3"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button
        variant="square-cyan"
        className="w-full md:w-auto truncate lg:break-normal flex-grow lg:flex-grow-0 p-3 lg:px-10"
      >
        Shorten It!
      </Button>
    </form>
  );
};

export default Form;
