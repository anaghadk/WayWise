import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router, useRouter } from "expo-router";

export function ActionButtons({ onAddToList }: { onAddToList: () => void }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => router.push("/iternarycart")}
      >
        <Text style={styles.saveButtonText}>Save itinerary</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton} onPress={onAddToList}>
        <Text style={styles.addButtonText}>Update list</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
  },
  saveButton: {
    marginTop: 56,
    paddingVertical: 8,
    paddingHorizontal: 100,
    backgroundColor: "#0891B2",
    borderRadius: 12,
    minHeight: 40,
    justifyContent: "center",
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: "#F8FAFC",
  },
  addButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#F8FAFC",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#AFB5C8",
    minHeight: 40,
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: "#0891B2",
  },
  
});
