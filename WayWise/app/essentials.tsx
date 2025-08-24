import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ClothingEssentials from "../components/Essentials/ClothingEssentials";
import ItineraryFooter from "../components/FoodIternary/ItineraryFooter";

const EssentialsPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ClothingEssentials />
      </ScrollView>
      <View style={styles.footerContainer}>
        <ItineraryFooter />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    paddingBottom: 100, // Leave space for fixed footer
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default EssentialsPage;
