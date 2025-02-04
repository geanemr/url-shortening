import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UrlList, UrlItem } from "../types/url";

interface UrlState {
  urls: UrlList;
  addUrl: (originalUrl: string, shortenUrl: string) => void;
}

export const useUrlStore = create<UrlState>()(
  persist(
    (set) => ({
      urls: [],

      addUrl: (originalUrl, shortenUrl) =>
        set((state) => {
          const urlData: UrlItem = {
            id: (state.urls.length + 1).toString(),
            originalUrl: originalUrl,
            shortenUrl: shortenUrl,
          };

          return { urls: [...state.urls, urlData] };
        }),
    }),
    { name: "url-storage" }
  )
);
