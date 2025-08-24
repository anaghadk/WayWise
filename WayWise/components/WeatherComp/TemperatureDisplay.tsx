import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface TemperatureDisplayProps {
  temperature: string;
  size?: "normal" | "large";
}

const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({
  temperature,
  size = "normal",
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.temperatureText,
          size === "large" && styles.largeTemperatureText,
        ]}
      >
        {temperature}
      </Text>
      {size === "large" && (
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/22d73a1459dba70d891f90fe84311c534c86fe31?placeholderIfAbsent=true&apiKey=5d2f2e97c6294b29bbb5bf86478f1efa",
          }}
          style={styles.degreeIcon}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  temperatureText: {
    color: "white",
    fontSize: 12,
  },
  largeTemperatureText: {
    fontSize: 70,
    color: "white",
  },
  degreeIcon: {
    marginTop: 20,
    aspectRatio: 0.93,
    width: 13,
    height: undefined,
  },
});

export default TemperatureDisplay;
