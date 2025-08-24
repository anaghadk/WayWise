import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ClothingGrid } from "./ClothingGrid";
import { ClothingHeader } from "./ClothingHeader";


const ClothingEssentials: React.FC = () => {
  return (
    <View style={styles.container}>
      <ClothingHeader />
      <ClothingGrid />
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    flexDirection: "column",
    marginHorizontal: "auto",
    width: "100%",
    maxWidth: 480,
    backgroundColor: "white",
    
  },
  
});

export default ClothingEssentials;
