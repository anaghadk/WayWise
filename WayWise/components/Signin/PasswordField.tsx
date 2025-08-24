import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

interface PasswordFieldProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff7f112061043dcc63273f7e5f625f11df732cbb?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e",
        }}
        style={styles.icon}
        resizeMode="contain"
      />
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder="Enter your password"
        secureTextEntry
        placeholderTextColor="#52525b"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 20,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#0891b2",
    borderRadius: 30,
    width: "100%",
  },
  icon: {
    width: 16,
    aspectRatio: 0.76,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    color: "#000000",
  },
});