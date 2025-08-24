"use client";
import React from "react";
import { View, StyleSheet } from "react-native";
import { ItineraryHeader } from "./ItineraryHeader";
import { TimelineContent } from "./TimelineContent";


export default function ItineraryCustomizer() {
  return (
    <View style={styles.container}>
      <ItineraryHeader />
      <TimelineContent />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 44,
    paddingTop: 80,
    paddingBottom: 48,
    backgroundColor: "#0E7490",
    
    maxWidth: 480,
    alignSelf: "center",
    width: "100%",
    overflow: "hidden",
  },
});
