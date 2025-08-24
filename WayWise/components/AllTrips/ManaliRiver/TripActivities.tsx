// TripActivities.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface TripActivitiesProps {
  selected: boolean;
  toggleSelected: () => void;
}

export const TripActivities: React.FC<TripActivitiesProps> = ({
  selected,
  toggleSelected,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Activities:</Text>
      <View style={styles.activityRow}>
        <Text style={styles.bold}>→ Boating :</Text>
        <Text style={styles.cost}>cost ₹25 for one person</Text>
      </View>
      <TouchableOpacity
        style={[styles.iconContainer, selected && styles.iconContainerSelected]}
        onPress={toggleSelected}
      >
        <Text style={styles.emoji}>🚣‍♀️</Text>
        <Text style={styles.activityLabel}>Boating</Text>
      </TouchableOpacity>
    </View>
  );
};

// styles... (unchanged)

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#52525B",
  },
  activityRow: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  bold: {
    fontSize: 16,
    fontWeight: "700",
    color: "#52525B",
  },
  cost: {
    fontSize: 16,
    color: "#52525B",
  },
  iconContainer: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEF2FF",
    borderRadius: 30,
    height: 66,
    width: 65,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainerSelected: {
    backgroundColor: "#22C55E", // green
  },
  emoji: {
    fontSize: 24,
  },
  activityLabel: {
    marginTop: 6,
    fontSize: 14,
    color: "#374151",
  },
});
