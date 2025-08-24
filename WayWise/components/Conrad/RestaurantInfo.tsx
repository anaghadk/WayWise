import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Rating } from "./Rating";

export const RestaurantInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://ik.imagekit.io/31g5nprim/3.PNG",
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.description}>
        Conrad Bengaluru is a luxury hotel located in the heart of the city overlooking Ulsoor Lake. The hotel offers premium amenities including a 24-hour fitness center, an outdoor infinity pool, and multiple fine dining options.
      </Text>
      <View style={styles.ratingContainer}>
        <Rating score="4.3⭐" />
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
