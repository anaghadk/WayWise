import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function ItineraryHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/31fc0d493144ca6eb8c96c00c545b040001afe34?placeholderIfAbsent=true&apiKey=7ceb83e8066846e7bc013a848d89dcd3",
        }}
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={styles.title}>Customize</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: 24,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  icon: {
    width: 28,
    height: 28,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    color: "#FFFFFF",
    flexBasis: "auto",
  },
});
