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
      const response = await fetch("https://api.tinyurl.com/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TINYURL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          domain: "tinyurl.com",
        }),
      });

      const json = await response.json();
      setShortenUrl(json.data.tiny_url);
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
