import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import Svg, { Path } from "react-native-svg";

export const LocationInfo = () => {
  const openMaps = () => {
    Linking.openURL("https://maps.app.goo.gl/HXuWutK5C8K6jvrF7");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Svg width={14} height={18} viewBox="0 0 14 18">
          <Path
            d="M6.50691 9.17197C6.95426 9.17197 7.33735 8.9922 7.65619 8.63266C7.97449 8.27373 8.13364 7.84204 8.13364 7.33758C8.13364 6.83312 7.97449 6.40112 7.65619 6.04158C7.33735 5.68265 6.95426 5.50318 6.50691 5.50318C6.05956 5.50318 5.67674 5.68265 5.35844 6.04158C5.0396 6.40112 4.88018 6.83312 4.88018 7.33758C4.88018 7.84204 5.0396 8.27373 5.35844 8.63266C5.67674 8.9922 6.05956 9.17197 6.50691 9.17197ZM6.50691 18C6.39846 18 6.29001 17.9771 6.18157 17.9312C6.07312 17.8853 5.97822 17.8242 5.89689 17.7478C3.9177 15.7758 2.44009 13.9454 1.46405 12.2565C0.488018 10.567 0 8.98854 0 7.52102C0 5.22803 0.654216 3.40127 1.96265 2.04076C3.27054 0.680255 4.78529 0 6.50691 0C8.22853 0 9.74328 0.680255 11.0512 2.04076C12.3596 3.40127 13.0138 5.22803 13.0138 7.52102C13.0138 8.98854 12.5258 10.567 11.5498 12.2565C10.5737 13.9454 9.09612 15.7758 7.11693 17.7478C7.0356 17.8242 6.9407 17.8853 6.83226 17.9312C6.72381 17.9771 6.61536 18 6.50691 18Z"
            fill="#636363"
          />
        </Svg>
        <Text style={styles.title}>Google Maps link</Text>
      </View>
      <TouchableOpacity onPress={openMaps} style={styles.link}>
        <Text style={styles.linkText}>https://maps.app.goo.gl/HXuWutK5C8K6jvrF7</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  header: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#52525B",
  },
  link: {
    marginTop: 16,
    padding: 6,
    paddingHorizontal: 12,
    backgroundColor: "#FFF",
  },
  linkText: {
    fontSize: 16,
    color: "#52525B",
    textDecorationLine: "underline",
  },
});
