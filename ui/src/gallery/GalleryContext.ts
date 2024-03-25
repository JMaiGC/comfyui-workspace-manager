import { createContext } from "react";
import type { Media } from "../types/dbTypes.ts";

interface GalleryContextProps {
  showAllImages: boolean;
  curMedia: Media | null;
  setCurMedia: (media: Media | null) => void;
  setMediaList: (media: Media[]) => void;
  setShowAllImages: (showAllImages: boolean) => void;
}

export const GalleryContext = createContext<GalleryContextProps>({
  showAllImages: false,
  curMedia: null,
  setCurMedia(): void {},
  setMediaList(): void {},
  setShowAllImages(): void {},
});
