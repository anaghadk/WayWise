import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ItineraryCard } from "../components/LastIternary/ItineraryCard"; // adjust path if needed
import ItineraryFooter from "../components/FoodIternary/ItineraryFooter"; // update if path differs

const LastItinerary = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ItineraryCard />
      </ScrollView>
      <View style={styles.footerContainer}>
        <ItineraryFooter />
      </View>
    </View>
  );
};

export default LastItinerary;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 50, // prevent overlap with footer
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
