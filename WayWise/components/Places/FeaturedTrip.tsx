import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface FeaturedTripProps {
  image: string;
  title: string;
  location: string;
  area: string;
  percentage: string;
  style?: object;
}

export const FeaturedTrip: React.FC<FeaturedTripProps> = ({
  image,
  title,
  location,
  area,
  percentage,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={{ uri: image }}
        style={styles.tripImage}
        resizeMode="contain"
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.areaContainer}>
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ecc9edb7d8affed371854725a5e2e445525b47d?placeholderIfAbsent=true&apiKey=dcd895ca795b4c71b1e9559091dae2f5" }}
            style={styles.pinIcon}
            resizeMode="contain"
          />
          <Text style={styles.areaText}>{area}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8be358953979be7e235b168e2c5571ddd222860?placeholderIfAbsent=true&apiKey=dcd895ca795b4c71b1e9559091dae2f5" }}
            style={styles.ratingImage}
            resizeMode="contain"
          />
          <Text style={styles.percentage}>{percentage}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    borderRadius: 24,
  },
  tripImage: {
    width: 141,
    height: 126,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  contentContainer: {
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1917",
  },
  location: {
    marginTop: 14,
    fontSize: 12,
    color: "#71717A",
  },
  areaContainer: {
    flexDirection: "row",
    gap: 4,
    marginTop: 12,
  },
  pinIcon: {
    width: 9,
    height: 11,
  },
  areaText: {
    fontSize: 12,
    color: "#71717A",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 14,
  },
  ratingImage: {
    width: 69,
    height: 14,
  },
  percentage: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0891B2",
    marginTop: 10,
  },
});
