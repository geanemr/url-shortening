import { useState } from "react";

export const useFetch = () => {
  const [url, setUrl] = useState("");

  const fetchShortenUrl = () => {
    fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("result", json.result_url);
      })
      .catch((error) => console.log({ error }));
  };

  return {
    fetchShortenUrl,
    url,
    setUrl,
  };
};
