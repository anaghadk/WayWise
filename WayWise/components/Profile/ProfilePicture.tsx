"use client";
import React from "react";
import { View, Image, StyleSheet } from "react-native";

const ProfilePicture: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://ik.imagekit.io/31g5nprim/okiwFw-n_400x400.jpg",
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 36,
  },
  image: {
    width: 126,
    height: 126,
    borderRadius: 71.5,
    borderWidth: 5,
    borderColor: "#FFFFFF",
  },
});

export default ProfilePicture;
