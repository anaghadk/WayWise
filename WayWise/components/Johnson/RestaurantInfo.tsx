import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Rating } from "./Rating";

export const RestaurantInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://ik.imagekit.io/31g5nprim/8-modified.png",
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.description}>
      Johnson's Cafe is a popular eatery in Old Manali, known for its cozy ambiance and fresh Himalayan trout dishes.
      </Text>
      <View style={styles.ratingContainer}>
        <Rating score="4.1⭐" />
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
