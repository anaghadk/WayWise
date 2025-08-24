import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Rating } from "./Rating";

export const RestaurantInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0048ad24143cd9b254a65c363ad263d6ebccbbc?placeholderIfAbsent=true&apiKey=dcd895ca795b4c71b1e9559091dae2f5",
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.description}>
        The LaLiT Ashok Bangalore is centrally located in Bengaluru city,
        adjacent to an 18-hole golf course. The LaLiT Ashok Bangalore also
        features fitness facilities which include a lawn tennis court.
      </Text>
      <View style={styles.ratingContainer}>
        <Rating score="4.5⭐" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    maxWidth: 312,
    aspectRatio: 1.81,
    borderRadius: 30,
  },
  description: {
    marginTop: 16,
    marginLeft: 10,
    fontSize: 14,
    textAlign: "center",
    color: "black",
    width: 286,
  },
  ratingContainer: {
    alignSelf: "flex-end",
    marginTop: 8,
    marginRight: 40,
  },
});
