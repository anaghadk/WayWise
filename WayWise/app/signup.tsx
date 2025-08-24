// /app/signup.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import PageLogin from "../components/Signup/PageLogin";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <PageLogin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
