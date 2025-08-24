// src/store/tripStore.ts
import { create } from 'zustand';

interface TripState {
  destination: string;
  accommodation: string;
  startDate: Date | null;
  endDate: Date | null;

  setDestination: (destination: string) => void;
  setAccommodation: (accommodation: string) => void;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
  resetTrip: () => void;
}

export const useTripStore = create<TripState>((set) => ({
  destination: '',
  accommodation: '',
  startDate: null,
  endDate: null,

  setDestination: (destination) => set({ destination }),
  setAccommodation: (accommodation) => set({ accommodation }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  resetTrip: () =>
    set({
      destination: '',
      accommodation: '',
      startDate: null,
      endDate: null,
    }),
}));
