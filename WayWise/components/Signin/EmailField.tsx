import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

interface EmailFieldProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const EmailField: React.FC<EmailFieldProps> = ({
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/484b3474f26740c8b3ba741d82f732df91738c29?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e",
          }}
          style={styles.icon}
          resizeMode="contain"
        />
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          placeholder="Enter your email"
          placeholderTextColor="#000000"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7549e953fd313ea009c9dcf7ed965e2177552f15?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e",
        }}
        style={styles.actionIcon}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 32,
    backgroundColor: "#0891b2",
    borderRadius: 30,
    width: "100%",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  icon: {
    width: 18,
    aspectRatio: 1.29,
  },
  actionIcon: {
    width: 15,
    aspectRatio: 1,
  },
  textInput: {
    fontSize: 14,
    color: "#000000",
    flex: 1,
  },
});