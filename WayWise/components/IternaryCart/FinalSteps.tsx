import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FoodIcon, CompassIcon, ShoppingIcon } from "./Icons";
import { ActivityCard } from "./ActivityCard";
import { ActivitySection } from "./ActivitySection";
import { TripHeader } from "./TripHeader";
import { useItineraryStore } from "@/store/useItineraryStore"; // adjust path if needed
import { useAuth } from "../../contexts/AuthContext"; // Add this import

interface FinalStepsProps {
  onConfirm: () => void;
}

const FinalSteps: React.FC<FinalStepsProps> = ({ onConfirm }) => {
  const items = useItineraryStore((state) => state.items);
  const { user, isAuthenticated } = useAuth(); // Get user from AuthContext

  // Display user's name if authenticated, otherwise show "Guest"
  const displayName = isAuthenticated && user?.name ? user.name : "Guest";

  // Filter items by category
  const foodItems = items.filter((item) => item.category === "food");
  const placeItems = items.filter((item) => item.category === "places");
  const shoppingItems = items.filter((item) => item.category === "shopping");

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <TripHeader userName={displayName} />
      </View>

      <View style={styles.contentSection}>
        {foodItems.length > 0 && (
          <ActivitySection title="Food:">
            {foodItems.map((item) => (
              <ActivityCard
                key={item.id}
                icon={<FoodIcon />}
                title={item.name}
                subtitle={item.details}
              />
            ))}
          </ActivitySection>
        )}

        {placeItems.length > 0 && (
          <ActivitySection title="Activities:">
            {placeItems.map((item) => (
              <ActivityCard
                key={item.id}
                icon={<CompassIcon />}
                title={item.name}
                subtitle={item.details}
                iconBgColor="#14532D"
              />
            ))}
          </ActivitySection>
        )}

        {shoppingItems.length > 0 && (
          <ActivitySection title="Shopping:">
            {shoppingItems.map((item) => (
              <ActivityCard
                key={item.id}
                icon={<ShoppingIcon />}
                title={item.name}
                subtitle={item.details}
                iconBgColor="#4C1D95"
              />
            ))}
          </ActivitySection>
        )}

        <View style={styles.footer}>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 24,
    width: 390,
  },
  headerSection: {
    width: "100%",
    height: 360,
    backgroundColor: "#FBE6DC",
  },
  contentSection: {
    flex: 1,
    gap: 20,
    padding: 20,
  },
  footer: {
    marginTop: "auto",
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: "#D4D4D4",
    marginBottom: 10,
  },
  confirmButton: {
    marginLeft: "auto",
    backgroundColor: "#14532D",
    borderRadius: 12,
    height: 50,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default FinalSteps;
