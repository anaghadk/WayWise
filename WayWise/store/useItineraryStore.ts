// /store/useItineraryStore.ts
import { create } from 'zustand';

type ItineraryItem = {
  id: string;
  category: 'food' | 'places' | 'shopping';
  name: string;
  details: string; // e.g., restaurant name, place + activity
};

type ItineraryStore = {
  items: ItineraryItem[];
  addItem: (item: ItineraryItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: ItineraryItem) => void;
  clearItems: () => void;
};

export const useItineraryStore = create<ItineraryStore>((set, get) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  toggleItem: (item) => {
    const exists = get().items.find((i) => i.id === item.id);
    if (exists) {
      get().removeItem(item.id);
    } else {
      get().addItem(item);
    }
  },
  clearItems: () => set({ items: [] }),
}));
