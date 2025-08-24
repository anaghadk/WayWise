import React from "react";
import { Image, StyleSheet } from "react-native";

export const UserAvatar: React.FC = () => {
  return (
    <Image
      source={{
        uri: "https://i.postimg.cc/Wb0J7CTJ/ion-earth.png",
      }}
      style={styles.avatar}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 208, // w-52
    aspectRatio: 1,
    alignSelf: "center",
  },
});