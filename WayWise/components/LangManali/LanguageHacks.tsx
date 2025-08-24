"use client";
import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import LanguageHacksHeader from "./LanguageHacksHeader";
import LanguageHacksContent from "./LanguageHacksContent";
import ItineraryFooter from "../FoodIternary/ItineraryFooter";

const { height: screenHeight } = Dimensions.get("window");

function LanguageHacks() {
  return (
    <View style={styles.wrapper}>
      {/* Background Image */}
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/960f6280b439bb00860de599f8e6a9b0979955ab?placeholderIfAbsent=true&apiKey=4ca067ba6d0b4aea9478b209d11b157f",
        }}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      />

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <LanguageHacksHeader />
          <LanguageHacksContent />
        </View>
      </ScrollView>

      {/* Fixed footer */}
      <View style={styles.footerContainer}>
        <ItineraryFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "relative",
    backgroundColor: "transparent",
  },
  scrollContent: {
    paddingBottom: 120, // space for footer
  },
  container: {
    flexDirection: "column",
    marginTop: 12, // Reduced gap between header and content
    paddingBottom: 32,
    paddingHorizontal: 16,
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent", // keeps background behind footer
  },
});

export default LanguageHacks;
