// app/lalitashok.tsx

import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import MainDishesMenu from "../components/1135AD/MainDishesMenu";

const LalitAshokScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <MainDishesMenu />
    </SafeAreaView>
  );
};

export default LalitAshokScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
