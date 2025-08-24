import { create } from 'zustand';

interface WeatherData {
  selectedTemperature: string;
  condition: string;
  destination: string;
  selectedDate: string;
  setWeatherData: (data: {
    selectedTemperature: string;
    condition: string;
    destination: string;
    selectedDate: string;
  }) => void;
}

export const useWeatherStore = create<WeatherData>((set) => ({
  selectedTemperature: '',
  condition: '',
  destination: '',
  selectedDate: '',
  setWeatherData: ({ selectedTemperature, condition, destination, selectedDate }) =>
    set({
      selectedTemperature,
      condition,
      destination,
      selectedDate,
    }),
}));
