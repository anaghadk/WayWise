// components/DestinationHeader.tsx
import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useTripStore } from "../../store/tripStore"; // adjust path as needed

export const DestinationHeader: React.FC = () => {
  const destination = useTripStore((state) => state.destination);

  return (
    <>
      <Text style={styles.destinationLabel}>Destination</Text>
      <View style={styles.locationContainer}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/109f6b54fb7062f8943dbb5364a957ea078601b7?placeholderIfAbsent=true&apiKey=dcd895ca795b4c71b1e9559091dae2f5",
          }}
          style={styles.locationIcon}
          resizeMode="contain"
        />
        <Text style={styles.locationText}>{destination || "No destination selected"}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  destinationLabel: {
    fontSize: 16,
    color: "#71717A",
    paddingLeft: 10,
  },
  locationContainer: {
    flexDirection: "row",
    gap: 6,
    marginTop: 8,
  },
  locationIcon: {
    width: 12,
    height: 15,
    alignSelf: "flex-start",
  },
  locationText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#27272A",
  },
});
