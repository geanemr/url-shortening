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

  const fetchShortenUrl = async () => {
    try {
      const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: url }),
      });
      const json = await response.json();
      setShortenUrl(json.result_url);
      setError("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || "An error occurred");
      } else {
        setError("An error occurred");
      }
    }
  };

  return {
    url,
    setUrl,
    fetchShortenUrl,
    error,
    shortenUrl,
  };
};
