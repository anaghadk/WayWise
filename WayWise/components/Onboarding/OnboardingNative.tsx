import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import StatusBar from './StatusBar';
import HomeIndicator from './HomeIndicator';
import { router } from 'expo-router'; // ✅ Import router

const OnboardingNative = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/46407ba4e07db2ab96ee1b4d556b6d7ddab0897b?placeholderIfAbsent=true&apiKey=c83360269d6d4476a58a4e391fa06aa9',
            }}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
          <View style={styles.statusBarWrapper}>
            <StatusBar />
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>
              Discover best places{'\n'}
              to go to vacation 😍
            </Text>
            <Text style={styles.description}>
              Log in to access your trips, explore new destinations, and plan
              your next adventure—all in one place.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              activeOpacity={0.8}
              accessibilityLabel="Login to your account"
              onPress={() => router.push('/signin')} // ✅ Navigate to /signin
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signupButton}
              activeOpacity={0.8}
              accessibilityLabel="Create a new account"
              onPress={() => router.push('/signup')} // ✅ Navigate to /signup
            >
              <Text style={styles.signupButtonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>

        <HomeIndicator />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    width: '100%',
    maxWidth: 480,
    borderWidth: 3,
    borderColor: '#1c1917',
    borderRadius: 40,
    backgroundColor: '#fafaf9',
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    aspectRatio: 0.819,
    borderRadius: 34,
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  statusBarWrapper: {
    position: 'absolute',
    top: 8,
    right: 12,
    zIndex: 2,
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 346,
    alignSelf: 'center',
    marginTop: 28,
    paddingHorizontal: 16,
  },
  headerContainer: {
    width: '100%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: -0.5,
    color: '#171717',
    textAlign: 'center',
  },
  description: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 20,
    color: '#9ca3af',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 32,
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#0891b2',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 48,
    paddingVertical: 24,
    minHeight: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  signupButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 48,
    paddingVertical: 24,
    marginTop: 14,
    minHeight: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
});

export default OnboardingNative;
