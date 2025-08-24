// ulsoorlake.tsx

import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import FeaturedTrips from "../components/AllTrips/ManaliRiver/FeaturedTrips"; // adjust path if needed

export default function UlsoorLakeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <FeaturedTrips />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
});
