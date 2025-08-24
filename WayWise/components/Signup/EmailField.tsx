import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface EmailFieldProps {
  value: string;
  onChangeText: (text: string) => void;
}

function EmailField({ value, onChangeText }: EmailFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          keyboardType="email-address"
          placeholder="Enter your email"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#71717a", // zinc-600
  },
  inputContainer: {
    flexDirection: "row",
    gap: 40,
    marginTop: 8,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1c1917", // stone-900
    padding: 0,
  },
  divider: {
    alignSelf: "stretch",
    marginTop: 10,
    height: 1,
    borderWidth: 1,
    borderColor: "#0891b2", // cyan-600
  },
});

export default EmailField;
