"use client";
import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function LanguageHacksHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1686593cfa8426b5c1023125f27526c1e66ba109?placeholderIfAbsent=true&apiKey=4ca067ba6d0b4aea9478b209d11b157f",
        }}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      />
      <View style={styles.titleContainer}>
        <View style={styles.titleWithIcon}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c58316976353539eed1a5b0c50cb2ac5aa34e6da?placeholderIfAbsent=true&apiKey=4ca067ba6d0b4aea9478b209d11b157f",
            }}
            style={styles.travelIcon}
            resizeMode="contain"
          />
          <Text style={styles.title}>Travel Hacks and Tips</Text>
        </View>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2e8574f15af480094401b9eb638d6aebe40896a?placeholderIfAbsent=true&apiKey=4ca067ba6d0b4aea9478b209d11b157f",
          }}
          style={styles.additionalIcon}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    width: "100%",
    aspectRatio: 2.022,
    justifyContent: "flex-end",
    paddingBottom: 16, // reduced bottom padding to minimize space
    overflow: "hidden",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 16,
    gap: 28,
  },
  titleWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  travelIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#292524",
  },
  additionalIcon: {
    width: 31,
    height: 31,
  },
});

export default LanguageHacksHeader;
