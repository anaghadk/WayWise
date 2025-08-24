import { router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";

import { EmailField } from "../components/Signin/EmailField";
import { PasswordField } from "../components/Signin/PasswordField";
import { SignInButton } from "../components/Signin/SignInButton";
import { UserAvatar } from "../components/Signin/UserAvatar";
import { useAuth } from "../contexts/AuthContext"; // import Auth context

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // global login method from context

  const handleSignIn = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    try {
      const response = await fetch("http://192.168.29.102:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

     

if (response.ok) {
  Alert.alert("Success 🎉", `Welcome back, ${data.user.name}!`);
  login(data.user); // Save user globally
  router.push("/createtrip");
} else {
  Alert.alert("Login Failed ❌", data.message || "Something went wrong.");
}
} catch (err) {
  Alert.alert("Network Error 🌐", "Please try again.");
}

  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome Back!</Text>
          </View>
          <View style={styles.formContainer}>
            <UserAvatar />
            <EmailField value={email} onChangeText={setEmail} />
            <PasswordField value={password} onChangeText={setPassword} />
            {/* Pass handleSignIn as onPress prop */}
            <SignInButton onPress={handleSignIn} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 1,
  },
  container: {
    padding: 24,
    paddingTop: 64,
    paddingBottom: 128,
    backgroundColor: "#FBE6DC",
    borderRadius: 24,
    borderWidth: 3,
    borderColor: "#1c1917",
    maxWidth: 480,
    alignSelf: "center",
    width: "100%",
  },
  header: {
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
  formContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 32,
    paddingTop: 48,
    paddingBottom: 112,
    marginTop: 16,
    width: "100%",
    alignItems: "center",
  },
});
