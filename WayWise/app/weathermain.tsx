// app/weathermain.tsx
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Weather from "../components/WeatherComp/Weather"; // Adjust path if components are elsewhere

const WeatherMain: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Weather />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    
    alignItems: "center",
    backgroundColor: "#f1f5f9", // Optional light background
  },
  container: {
    width: "100%",
    
    alignItems: "center",
  },
});

export default WeatherMain;
