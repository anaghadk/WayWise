import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { BackIcon } from "./Icons";

interface TripHeaderProps {
  userName: string;
}

export const TripHeader: React.FC<TripHeaderProps> = ({ userName }) => {
  return (
    <View style={styles.header}>
      <View style={styles.topBar}>
        <View style={styles.userInfo}>
          <View style={styles.backButton}>
            <BackIcon />
          </View>
          <Text style={styles.greeting}>Hi {userName} 👋</Text>
        </View>
        <Image
          source={{ uri: "https://placehold.co/54x50/e6e6e6/e6e6e6" }}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Final Steps</Text>
        <Text style={styles.subtitle}>
          Check out your itinerary and finalize your trip.
        </Text>
      </View>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f61145cddcfc770770d1c4eec115075ab6c0458",
        }}
        style={styles.illustration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    gap: 12,
    padding: 20,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  backButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#9CA3AF",
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileImage: {
    width: 54,
    height: 50,
    borderRadius: 25,
  },
  titleSection: {
    marginTop: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#666",
  },
  illustration: {
    width: 145,
    height: 117,
    alignSelf: "center",
    marginTop: 20,
  },
});
