import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

interface ActionButtonsProps {
  onAddToList: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onAddToList }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.itineraryButton}
        accessibilityLabel="View Itinerary"
        onPress={() => router.push("/iternarylist")} // Make sure this file exists as app/itinerary.tsx
      >
        <Text style={styles.itineraryButtonText}>View Itinerary</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        accessibilityLabel="Add to list"
        onPress={onAddToList}
      >
        <Text style={styles.addButtonText}>Add to list</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  itineraryButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#0891B2",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  itineraryButtonText: {
    color: "#EEF2FF",
    fontWeight: "700",
  },
  addButton: {
    marginTop: 10,
    width: "100%",
    height: 45,
    backgroundColor: "#0891B2",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#E9E9E9",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
