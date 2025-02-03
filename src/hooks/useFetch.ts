import { Dispatch, SetStateAction, useState } from "react";

interface useFetchInterface {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  fetchShortenUrl: () => void;
  error: string;
  shortenUrl: string;
}

export const useFetch = (): useFetchInterface => {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");
  const [error, setError] = useState("");

  const fetchShortenUrl = () => {
    fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    })
      .then((response) => response.json())
      .then((json) => setShortenUrl(json.result_url))
      .catch((error) => setError(error));
  };

  return {
    url,
    setUrl,
    fetchShortenUrl,
    error,
    shortenUrl,
  };
};
