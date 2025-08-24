import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import CategorySelector from "./CategorySelector";
import { useTripStore } from "../../store/tripStore"; // Adjust path
import { useAuth } from "../../contexts/AuthContext"; // Add this import
import { useRouter } from "expo-router"; // ✅ import router
import { Ionicons } from "@expo/vector-icons"; // ✅ use Ionicons (from expo/vector-icons)


const ItineraryHeader = () => {
  const destination = useTripStore((state) => state.destination);
  const { user, isAuthenticated } = useAuth(); // Get user from AuthContext
  const router = useRouter(); // ✅ get router

  // Display user's name if authenticated, otherwise show "Guest"
  const displayName = isAuthenticated && user?.name ? user.name : "Guest";
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <View style={styles.greetingRow}>
          {/* ✅ Back Icon */}
          <TouchableOpacity onPress={() => router.push("/createtrip")}>
            <Ionicons name="arrow-back" size={24} color="#000" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.greeting}>Hi {displayName} 👋</Text>
        </View>

        <Text style={styles.destinationLabel}>Destination</Text>
        <View style={styles.locationRow}>
          <Image
            source={{
              uri: "https://ik.imagekit.io/31g5nprim/loc.PNG",
            }}
            style={styles.locationIcon}
          />
          <Text style={styles.locationText}>{destination || "Select destination"}</Text>
        </View>
        <Text style={styles.categoryTitle}>Categories:</Text>
        <CategorySelector />
      </View>

      <Image
        source={{
          uri: "https://ik.imagekit.io/31g5nprim/okiwFw-n_400x400.jpg",
        }}
        style={styles.profile}
      />
    </View>
  );
};

export default ItineraryHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingRight: 32,
    paddingBottom: 12,
    paddingLeft: 16,
    backgroundColor: "#FBE6DC",
  },
  left: {
    flex: 1,
    marginTop: 16,
  },
  greetingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  backIcon: {
    marginRight: 8,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  destinationLabel: {
    marginTop: 20,
    color: "#52525b",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  locationIcon: {
    width: 12,
    height: 15,
    marginRight: 6,
  },
  locationText: {
    color: "#27272a",
    fontWeight: "600",
  },
  categoryTitle: {
    marginTop: 48,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  profile: {
    width: 90,
    height: 90,
    borderRadius: 71.5,
    borderWidth: 5,
    borderColor: "#FFFFFF",
  },
});