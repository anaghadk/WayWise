import * as React from "react";
import { StyleSheet, View } from "react-native";
import ClothingEssentials from "../components/ClothingEssentials/ClothingEssentials";

const ClothingEssentialsPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <ClothingEssentials />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default ClothingEssentialsPage;
