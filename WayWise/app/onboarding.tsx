import React from 'react';
import { View, StyleSheet } from 'react-native';
import OnboardingNative from '../components/Onboarding/OnboardingNative'; // This is the Builder.io component
import CustomStatusBar from '../components/Onboarding/StatusBar';
import HomeIndicator from '../components/Onboarding/HomeIndicator';

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <OnboardingNative />
      <HomeIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
