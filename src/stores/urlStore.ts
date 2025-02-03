import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UrlList, UrlItem } from "../types/url";

interface UrlState {
  urls: UrlList;
  addUrl: (shortenUrl: string) => void;
}

export const useUrlStore = create<UrlState>()(
  persist(
    (set) => ({
      urls: [],

      addUrl: (shortenUrl) =>
        set((state) => {
          const newUrl: UrlItem = {
            id: (state.urls.length + 1).toString(),
            url: shortenUrl,
          };

          return { urls: [...state.urls, newUrl] };
        }),
    }),
    { name: "url-storage" }
  )
);
