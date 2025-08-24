import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

interface ItineraryHeaderProps {
  title: string;
  iconSrc: string;
}

export const ItineraryHeader: React.FC<ItineraryHeaderProps> = ({
  title,
  iconSrc,
}) => {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f031abf1b146d5e13ef9bb5762f8d78c8f10598?placeholderIfAbsent=true&apiKey=7ceb83e8066846e7bc013a848d89dcd3",
      }}
      style={styles.headerBackground}
    >
      <View style={styles.titleContainer}>
        <Image
          source={{ uri: iconSrc }}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    width: "100%",
    aspectRatio: 1.56,
    paddingHorizontal: 48,
    paddingTop: 106,
    paddingBottom: 24,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 10,
  },
  icon: {
    width: 28,
    height: 28,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    textDecorationLine: "underline",
    flexGrow: 1,
  },
});
