// ItineraryDay.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function ItineraryDay({
  items,
  deletedIds,
  onToggleDelete,
}: {
  items: { id: string; display: string }[];
  deletedIds: string[];
  onToggleDelete: (id: string) => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.dayTitle}></Text>
      <View style={styles.content}>
        {items.map((item) => (
          <View key={item.id} style={styles.row}>
            <TouchableOpacity onPress={() => onToggleDelete(item.id)}>
              <Text style={styles.deleteIcon}>
                {deletedIds.includes(item.id) ? "❌" : "⬜"}
              </Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.sectionText,
                deletedIds.includes(item.id) && {
                  textDecorationLine: "line-through",
                  opacity: 0.5,
                },
              ]}
            >
              {item.display}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  dayTitle: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
  },
  content: {
    marginTop: 14,
  },
  sectionText: {
    fontSize: 18,
    color: "#FFFFFF",
    marginVertical: 2,
    paddingLeft: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteIcon: {
    fontSize: 18,
    color: "#EF4444", // red
  },
});
