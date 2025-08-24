// components/Weather/HourlyForecast.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import ForecastRow from "./ForecastRow";

interface Props {
  hours: string[];
  temperatures: string[];
  onHourSelect: (temp: string) => void;
}

export default function HourlyForecast({
  hours,
  temperatures,
  onHourSelect,
}: Props) {
  // split into pages of 5 columns each
  const pages: { hours: string[]; temps: string[] }[] = [];
  for (let i = 0; i < hours.length; i += 5) {
    pages.push({
      hours: hours.slice(i, i + 5),
      temps: temperatures.slice(i, i + 5),
    });
  }

  return (
    <View style={styles.container}>
      {pages.map((page, i) => (
        <View key={i}>
          <ForecastRow
            hours={page.hours}
            temperatures={page.temps}
            onHourPress={onHourSelect}
          />
          {/* Show divider between rows, except after the last row */}
          {i < pages.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 16,
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 36,
    marginTop: 28,
    overflow: "hidden",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginVertical: 10,
    borderRadius: 8,
  },
});
