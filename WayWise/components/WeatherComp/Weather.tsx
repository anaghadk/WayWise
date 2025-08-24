import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { useTripStore } from "../../store/tripStore";

import WeatherCard from "../WeatherComp/WeatherCard";
import HourlyForecast from "../WeatherComp/HourlyForecast";
import { useWeatherStore } from "../../store/weatherStore"; // adjust the path if needed


export default function Weather() {
  const router = useRouter();
  const destination = useTripStore((s) => s.destination);
  const tripStartDate = useTripStore((s) => s.startDate);
  const tripEndDate = useTripStore((s) => s.endDate);

  const [selectedDate, setSelectedDate] = React.useState<string>(
    tripStartDate ? tripStartDate.toISOString().slice(0, 10) : ""
  );

  const [weatherData, setWeatherData] = React.useState<{
    hours: string[];
    temps: string[];
    condition: string;
    currentTemp: string;
  }>({
    hours: [],
    temps: [],
    condition: "—",
    currentTemp: "—",
  });

  const coords: Record<string, { lat: number; lon: number }> = {
    "Bangalore": { lat: 12.9716, lon: 77.5946 },
    "Bangalore, Karnataka": { lat: 12.9716, lon: 77.5946 },
    "Delhi": { lat: 28.6139, lon: 77.2090 },
    "Mumbai": { lat: 19.0760, lon: 72.8777 },
    "Manali, Himachal Pradesh": { lat: 32.2432, lon: 77.1892 },
    "Jaipur, Rajasthan": { lat: 26.9124, lon: 75.7873 },
  };

  const dateOptions = React.useMemo(() => {
    if (!tripStartDate || !tripEndDate) return [];
    const opts: string[] = [];
    for (
      let d = new Date(tripStartDate);
      d <= tripEndDate;
      d.setDate(d.getDate() + 1)
    ) {
      opts.push(d.toISOString().slice(0, 10));
    }
    return opts;
  }, [tripStartDate, tripEndDate]);

  React.useEffect(() => {
    async function fetchWeather() {
      if (!destination || !selectedDate) return;

      const { lat, lon } = coords[destination] ?? coords["Bangalore"];

      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast` +
          `?latitude=${lat}&longitude=${lon}` +
          `&hourly=temperature_2m,weathercode` +
          `&start_date=${selectedDate}&end_date=${selectedDate}` +
          `&timezone=auto`
      );

      const json = await res.json();
      const times: string[] = json.hourly.time;
      const temps: number[] = json.hourly.temperature_2m;
      const codes: number[] = json.hourly.weathercode;

      const hours: string[] = [];
      const tempLabels: string[] = [];

      for (let i = 0; i < 24; i++) {
        const h = parseInt(times[i].slice(11, 13), 10);
        const label = `${(h % 12 || 12)} ${h < 12 ? "AM" : "PM"}`;
        hours.push(label);
        tempLabels.push(temps[i]?.toFixed(0) ?? "--");
      }

      const nowHour = new Date().getHours();
      const conditionCode = codes[nowHour];
      const condition =
        [0].includes(conditionCode) ? "Clear" :
        [1, 2, 3].includes(conditionCode) ? "Cloudy" :
        [45, 48].includes(conditionCode) ? "Fog" :
        [51, 53, 55, 56, 57].includes(conditionCode) ? "Drizzle" :
        [61, 63, 65, 66, 67, 80, 81, 82].includes(conditionCode) ? "Rain" :
        [71, 73, 75, 77, 85, 86].includes(conditionCode) ? "Snow" :
        [95, 96, 99].includes(conditionCode) ? "Thunderstorm" :
        "Unknown";

      setWeatherData({
        hours,
        temps: tempLabels,
        condition,
        currentTemp: tempLabels[nowHour] ?? "--",
      });
      useWeatherStore.getState().setWeatherData({
  selectedTemperature: tempLabels[nowHour] ?? "--",
  condition,
  destination,
  selectedDate,
});

    }

    fetchWeather();
  }, [destination, selectedDate]);

  // 🔥 Determine background type: "hot", "cold", "rain"
let backgroundType: "hot" | "cold" | "rain" | "default" = "default";

const currentTemp = parseInt(weatherData.currentTemp);
const c = weatherData.condition.toLowerCase();

if (c.includes("rain") || c.includes("drizzle") || c.includes("thunderstorm")) {
  backgroundType = "rain";
} else if (c.includes("snow") || c.includes("fog") || c.includes("cloudy")) {
  backgroundType = "cold";
} else if (!isNaN(currentTemp) && currentTemp < 20) {
  backgroundType = "cold";
} else if (!isNaN(currentTemp)) {
  backgroundType = "hot";
}

  // 🌅 Image URIs based on background type
  const backgroundImages: Record<string, string> = {
    hot: "https://ik.imagekit.io/31g5nprim/b2d09d0844f73cd907d15370b3207630.jpg",
    rain: "https://ik.imagekit.io/31g5nprim/c55cb8ac7580c2d8ce79d51a004b1798.jpg",
    cold: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4a3921c23b008e02c5a46b0fe973c41f34d2b88",
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image
          style={styles.backgroundImage}
          source={{ uri: backgroundImages[backgroundType] }}
          resizeMode="cover"
        />

        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <WeatherCard
            selectedTemperature={weatherData.currentTemp}
            condition={weatherData.condition}
            destination={destination}
            dates={dateOptions}
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />

          <HourlyForecast
            hours={weatherData.hours}
            temperatures={weatherData.temps}
            onHourSelect={(temp) =>
              setWeatherData((prev) => ({ ...prev, currentTemp: temp }))
            }
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "white",
  },
  contentWrapper: { width: "100%", position: "relative", flex: 1 },
  backgroundImage: { position: "absolute", width: "100%", height: "100%" },
  scrollContent: { paddingHorizontal: 32, paddingTop: 56, paddingBottom: 100 },
  backButton: {
    position: "absolute",
    top: 27,
    left: 16,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 6,
    borderRadius: 10,
    zIndex: 2,
  },
  backButtonText: { color: "white", fontSize: 14 },
});
