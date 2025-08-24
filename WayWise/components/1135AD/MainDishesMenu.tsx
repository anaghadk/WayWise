// MainDishesMenu.tsx
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import { useRouter } from "expo-router";
import { RestaurantHeader } from "./RestaurantHeader";
import { RestaurantInfo } from "./RestaurantInfo";
import { DishGrid } from "./DishGrid";
import ItineraryFooter from "../FoodIternary/ItineraryFooter";
import { useItineraryStore } from "../../store/useItineraryStore";
import uuid from "react-native-uuid"; // ✅ Correct import

const MainDishesMenu: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const items = useItineraryStore((state) => state.items);

  const addItem = useItineraryStore((state) => state.addItem);
  const removeItem = useItineraryStore((state) => state.removeItem);
  const router = useRouter();

  const handleAddDish = (dishName: string) => {
    const isSelected = selectedDishes.includes(dishName);

    setSelectedDishes((prev) =>
      isSelected ? prev.filter((d) => d !== dishName) : [...prev, dishName]
    );

    const existingItem = items.find(
      (item) => item.name === dishName && item.category === "food"
    );

    if (isSelected && existingItem) {
      removeItem(existingItem.id);
    } else if (!isSelected && !existingItem) {
      addItem({
        id: uuid.v4() as string, // ✅ Correct usage
        category: "food",
        name: dishName,
        details: "1135AD", // Customize this as needed
      });
    }
  };

  const handleNavigate = () => {
    selectedDishes.forEach((dishName) => {
      const alreadyExists = items.some(
        (item) => item.name === dishName && item.category === "food"
      );
      if (!alreadyExists) {
        addItem({
          id: uuid.v4() as string, // ✅ Correct usage
          category: "food",
          name: dishName,
          details: dishName,
        });
      }
    });

    setSelectedDishes([]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View style={styles.inner}>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <RestaurantHeader
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <RestaurantInfo />
            <DishGrid
              filter={searchQuery}
              onAddDish={handleAddDish}
              selectedDishes={selectedDishes}
            />
          </ScrollView>

          {/* Add to List Button */}
          <View style={styles.addToListWrapper}>
            <TouchableOpacity
              style={[
                styles.addToListButton,
                {
                  backgroundColor: selectedDishes.length
                    ? "#0891B2"
                    : "#7ABFC7",
                },
              ]}
              disabled={selectedDishes.length === 0}
              onPress={handleNavigate}
            >
              <Text style={styles.addToListText}>Added to List</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <ItineraryFooter />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MainDishesMenu;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 180,
    paddingHorizontal: 16,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  addToListWrapper: {
    position: "absolute",
    bottom: 80,
    left: 16,
    right: 16,
    alignItems: "center",
  },
  addToListButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    elevation: 3,
  },
  addToListText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
