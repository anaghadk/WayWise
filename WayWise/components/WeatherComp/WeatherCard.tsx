// WeatherCard.tsx
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import TemperatureDisplay from "./TemperatureDisplay";

interface WeatherCardProps {
  selectedTemperature: string;
  condition: string;
  destination: string;
  dates: string[];
  selectedDate: string;
  onDateChange: (date: string) => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  selectedTemperature,
  condition,
  destination,
  dates,
  selectedDate,
  onDateChange,
}) => {
  const [formattedDate, setFormattedDate] = useState("Date not set");

  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      const formatted = new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(date);
      setFormattedDate(formatted);
    }
  }, [selectedDate]);

  // 🌡️ Determine backgroundType
  let backgroundType: "hot" | "cold" | "rain" | "default" = "default";

  const currentTemp = parseInt(selectedTemperature);
  const c = condition.toLowerCase();

  if (c.includes("rain") || c.includes("drizzle") || c.includes("thunderstorm")) {
    backgroundType = "rain";
  } else if (c.includes("snow") || c.includes("fog") || c.includes("cloudy")) {
    backgroundType = "cold";
  } else if (!isNaN(currentTemp) && currentTemp < 20) {
    backgroundType = "cold";
  } else if (!isNaN(currentTemp)) {
    backgroundType = "hot";
  }

  // 🎨 Background colors for card
  const backgroundColors: Record<string, string> = {
    hot: "#EFAA82",
    cold: "#5A8BAB",
    rain: "#40666A",
    default: "#5A8BAB",
  };

  // 🌤️ Weather icons
  const weatherIcons: Record<string, string> = {
    hot: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    cold: "https://ik.imagekit.io/31g5nprim/weathher.PNG",
    rain: "https://ik.imagekit.io/31g5nprim/rainicon.PNG?updatedAt=1747718399776",
    default: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
  };

  const backgroundColor = backgroundColors[backgroundType];
  const iconUri = weatherIcons[backgroundType];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.tomorrowText}>{formattedDate}</Text>

      <View style={styles.temperatureContainer}>
        <Image
          source={{ uri: iconUri }}
          style={styles.weatherIcon}
          resizeMode="contain"
        />
        <TemperatureDisplay temperature={selectedTemperature} size="large" />
      </View>

      <Text style={styles.conditionText}>{condition || "—"}</Text>
      <Text style={styles.locationText}>
        {destination || "Destination not set"}
      </Text>

      {/* Date + Dropdown */}
      <View style={styles.datePickerRow}>
        <Text style={styles.dateText}>{formattedDate}</Text>
        <Picker
          selectedValue={selectedDate}
          onValueChange={(itemValue) => onDateChange(itemValue)}
          style={styles.picker}
          dropdownIconColor="white"
        >
          {dates.map((date) => (
            <Picker.Item
              key={date}
              label={new Intl.DateTimeFormat("en-GB", {
                day: "2-digit",
                month: "short",
              }).format(new Date(date))}
              value={date}
            />
          ))}
        </Picker>
      </View>

      <View style={styles.additionalInfoContainer}>
        <Text style={styles.feelsLikeText}>Feels like 28</Text>
        <View style={styles.sunsetContainer}>
          <View style={styles.divider} />
          <Text style={styles.sunsetText}>Sunset 18:20</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 48,
    paddingTop: 24,
    paddingBottom: 36,
    width: "100%",
    borderRadius: 24,
    position: "relative",
    overflow: "hidden",
  },
  tomorrowText: {
    alignSelf: "flex-start",
    marginLeft: 60,
    fontSize: 20,
    fontWeight: "500",
    color: "#cbd5e1",
  },
  temperatureContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "flex-start",
    alignSelf: "stretch",
    marginTop: 24,
  },
  weatherIcon: {
    alignSelf: "flex-end",
    marginTop: 18,
    marginBottom: 20,
    aspectRatio: 1.28,
    width: 83,
    height: undefined,
  },
  conditionText: {
    marginTop: 28,
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  locationText: {
    marginTop: 24,
    color: "#cbd5e1",
    fontWeight: "500",
    fontSize: 12,
  },
  dateText: {
    color: "#cbd5e1",
    fontWeight: "500",
    fontSize: 12,
  },
  datePickerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 24,
  },
  picker: {
    height: 24,
    width: 30,
    color: "#ffffff",
    borderRadius: 8,
    fontSize: 12,
  },
  additionalInfoContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 24,
    maxWidth: "100%",
    width: 168,
  },
  feelsLikeText: {
    color: "#cbd5e1",
    fontWeight: "500",
    fontSize: 12,
  },
  sunsetContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  divider: {
    alignSelf: "flex-start",
    marginTop: 6,
    width: 1,
    height: 9,
    borderRadius: 8,
    backgroundColor: "#cbd5e1",
  },
  sunsetText: {
    color: "#cbd5e1",
    fontWeight: "500",
    fontSize: 12,
  },
});

export default WeatherCard;
