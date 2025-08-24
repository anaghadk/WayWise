import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5002a8ce77c3e0cb309bc502900c5b60334ed884?placeholderIfAbsent=true&apiKey=dcd895ca795b4c71b1e9559091dae2f5",
        }}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.text}>Search Menu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 48,
    paddingVertical: 8,
    backgroundColor: "white",
    borderRadius: 24,
    width: 232,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    width: 17,
    height: 18,
    aspectRatio: 0.94,
  },
  text: {
    flex: 1,
    color: "#71717A",
    textAlign: "center",
    width: 108,
  },
});
