import React, { useEffect, useState } from "react";
import {
  Alert,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  SafeAreaView,
  KeyboardAvoidingView, Platform,
} from "react-native";
import EmailField from "./EmailField";
import UsernameField from "./UsernameField";
import PasswordField from "./PasswordField";
import { useRouter } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";


function PageLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // 👈 access login function from context


  useEffect(() => {
    setEmail("");
    setUsername("");
    setPassword("");
  }, []);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!email.trim()) {
      Alert.alert("Validation Error", "Email is required");
      return false;
    }
    if (!username.trim()) {
      Alert.alert("Validation Error", "Username is required");
      return false;
    }
    if (!password.trim()) {
      Alert.alert("Validation Error", "Password is required");
      return false;
    }
    if (!isValidEmail(email.trim())) {
      Alert.alert("Validation Error", "Please enter a valid email address");
      return false;
    }
    if (username.trim().length < 3) {
      Alert.alert("Validation Error", "Username must be at least 3 characters");
      return false;
    }
    if (password.length < 6) {
      Alert.alert("Validation Error", "Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  const handleSignup = async () => {
  if (!validateForm()) return;

  try {
    const response = await fetch("http://192.168.29.102:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: username.trim(),
        email: email.trim(),
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      Alert.alert("Signup failed", data.message || "An error occurred");
      return;
    }

    // ✅ Update context so user is authenticated
    login({
      id: data.user._id || data.user.id, // depending on backend naming
      name: data.user.name,
      email: data.user.email,
    });

    Alert.alert("Signup Success 🎉", `Welcome aboard, ${data.user.name}!`);
    router.push("/createtrip");
  } catch (err) {
    console.error(err);
    Alert.alert("Network error", "Could not connect to server");
  }
};


  const isFormValid =
    email.trim() &&
    username.trim() &&
    password.trim() &&
    isValidEmail(email.trim()) &&
    username.trim().length >= 3 &&
    password.length >= 6;

  const testButtonPress = () => {
    console.log("=== DEBUG FORM VALUES ===");
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Form valid:", !!isFormValid);

    if (isFormValid) {
      handleSignup();
    } else {
      Alert.alert("Form is not valid", "Please check inputs.");
    }
  };

  return (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} // adjust if needed
  >
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.topHeader}>
            <Text style={styles.journeyText}>Let's start your journey!🏖️</Text>
            <Image
              source={{ uri: "https://i.postimg.cc/Wb0J7CTJ/ion-earth.png" }}
              style={styles.headerImage}
              resizeMode="contain"
            />
          </View>


          <View style={styles.formContainer}>
            <EmailField value={email} onChangeText={setEmail} />
            {email.trim() && !isValidEmail(email.trim()) && (
              <Text style={styles.errorText}>
                Please enter a valid email address
              </Text>
            )}

            <UsernameField value={username} onChangeText={setUsername} />
            {username.trim() && username.trim().length < 3 && (
              <Text style={styles.errorText}>
                Username must be at least 3 characters
              </Text>
            )}

            <PasswordField value={password} onChangeText={setPassword} />
            {password && password.length < 6 && (
              <Text style={styles.errorText}>
                Password must be at least 6 characters
              </Text>
            )}
          </View>

          <TouchableOpacity
            style={[
              styles.signUpButton,
              {
                backgroundColor: isFormValid ? "#008FA0" : "#A0A0A0",
              },
            ]}
            onPress={testButtonPress}
            disabled={!isFormValid}
            activeOpacity={0.7}
          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FBE6DC",
  },
  container: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    maxWidth: 480,
    backgroundColor: "white",
    borderRadius: 24,
    
    overflow: "hidden",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  topHeader: {
    backgroundColor: "#FBE6DC",
    width: "100%",
    paddingTop: 80,
    paddingBottom: 40, // Increased from 30 to 60
    alignItems: "center",
  },
  headerImage: {
    width: 160,
    height: 160,
    alignSelf: "center",
    marginBottom: 16,
    marginTop: 25,
  },
  journeyText: {
    fontSize: 23,
    fontWeight: "600",
    color: "#1c1917",
    textAlign: "center",
  },
  formContainer: {
    width: "100%",
    maxWidth: 480,
    paddingHorizontal: 36,
    marginTop: 16, // Reduced from 32 to 16
    alignSelf: "center",
  },
  signUpButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 40,
    alignSelf: "center",
    width: "90%",
    maxWidth: 400,
    minHeight: 50,
  },
  signUpText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  debugContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginHorizontal: 20,
  },
  debugText: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginVertical: 2,
  },
  errorText: {
    fontSize: 12,
    color: "#DC2626",
    marginTop: 4,
    marginLeft: 4,
    fontWeight: "500",
  },
});

export default PageLogin;
