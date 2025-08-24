import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ImageItemProps {
  imageUrl: string;
  caption: string;
  style?: any;
  imageStyle?: any;
}

export const ImageItem: React.FC<ImageItemProps> = ({
  imageUrl,
  caption,
  style,
  imageStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={{ uri: imageUrl }}
        style={[styles.image, imageStyle]}
        resizeMode="contain"
      />
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    borderRadius: 35,
  },
  caption: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 14,
    color: "black",
  },
});
