import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface RatingProps {
  score: string;
}

export const Rating: React.FC<RatingProps> = ({ score }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f5f88459aeedbb83d3bee20bb7ff18007cf3731?placeholderIfAbsent=true&apiKey=dcd895ca795b4c71b1e9559091dae2f5",
        }}
        style={styles.star}
        resizeMode="contain"
      />
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 2,
  },
  star: {
    width: 19,
    height: 20,
    aspectRatio: 0.95,
  },
  score: {
    fontSize: 18,
    color: "#71717A",
  },
});
