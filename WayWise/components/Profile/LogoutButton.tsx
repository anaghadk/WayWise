"use client";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface LogoutButtonProps {
  onLogoutPress: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogoutPress }) => {
  return (
    <TouchableOpacity onPress={onLogoutPress} style={styles.button}>
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBE6DC",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    height: 50,
    width: 125,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default LogoutButton;
