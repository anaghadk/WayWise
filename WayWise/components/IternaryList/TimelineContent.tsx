// TimelineContent.tsx
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ItineraryDay } from "./ItineraryDay";
import { ActionButtons } from "./ActionButtons";
import { useItineraryStore } from "../../store/useItineraryStore";

export function TimelineContent() {
  const items = useItineraryStore((state) => state.items);
  const removeItem = useItineraryStore((state) => state.removeItem);

  const [deletedIds, setDeletedIds] = useState<string[]>([]);

  const toggleDelete = (id: string) => {
    setDeletedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleAddToList = () => {
    deletedIds.forEach((id) => removeItem(id));
    setDeletedIds([]);
  };

  // Prepare display objects with id and display text
  const displayItems = items.map((item) => ({
  id: item.id,
  display: `${item.category.charAt(0).toUpperCase() + item.category.slice(1)}: ${item.name}${item.details ? ` at ${item.details}` : ""}`,
}));


  return (
    <View style={styles.container}>
      <ItineraryDay
        items={displayItems}
        deletedIds={deletedIds}
        onToggleDelete={toggleDelete}
      />
      <ActionButtons onAddToList={handleAddToList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
});
