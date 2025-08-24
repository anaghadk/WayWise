"use client";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProfileHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity accessibilityLabel="Edit profile">
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingTop: 40,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  editIcon: {
    width: 23,
    height: 23,
  },
});

export default ProfileHeader;
