import React from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import ItineraryCustomizer from "../components/IternaryList/ItineraryCustomizer";
import ItineraryFooter from "../components/FoodIternary/ItineraryFooter";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function ItineraryList() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ItineraryCustomizer />
        {/* Padding to avoid content being hidden behind the footer */}
        <View style={{ height: 80 }} />
      </ScrollView>

      <View style={styles.footerContainer}>
        <ItineraryFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    backgroundColor: "#0E7490",
    borderWidth: 0,

    overflow: "hidden",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 5, // Ensures content above footer is visible
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 2,
    paddingVertical: 1,
    backgroundColor: "#0E7490", // extend background to footer
  },
});
