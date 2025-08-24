import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ItineraryList } from "./ItineraryList";

interface DaySectionProps {
  dayNumber: number;
  activities: {
    morning: string[];
    afternoon: string[];
    evening: string[];
  };
  additionalItems?: string[];
}

export const DaySection: React.FC<DaySectionProps> = ({
  dayNumber,
  activities,
  additionalItems,
}) => {
  const sections = [
    { title: "Food:", items: activities.morning },
    { title: "Activities:", items: activities.afternoon },
    { title: "Shopping:", items: activities.evening },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dot} />
       
      </View>
      <View style={styles.content}>
        <ItineraryList sections={sections} additionalItems={additionalItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center", // ✅ center dot vertically now
    gap: 32,
  },
  dot: {
    width: 18,
    height: 18,
    backgroundColor: "#f97316",
    borderRadius: 9,
  },
  
  content: {
    marginTop: 1,
    
  },
});
