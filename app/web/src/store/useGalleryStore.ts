import { create } from 'zustand';

interface Icon {
  id: number;
  name: string;
  key: string;
}

interface GalleryState {
  icons: Icon[];
  setIcons: (icon: Icon[]) => void;
}

const initialState = {
  icons: [],
};

export const useGalleryStore = create<GalleryState>((set) => ({
  ...initialState,
  setIcons: (icons) => set(() => ({ icons })),
}));
