import * as React from "react";
import { StyleSheet, View } from "react-native";
import { ImageItem } from "./ImageItem";

export const ClothingGrid: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <ImageItem
          imageUrl="https://ik.imagekit.io/31g5nprim/20.PNG"
          caption="Power Bank"
          imageStyle={styles.verticalImage}
        />
        <ImageItem
          imageUrl="https://ik.imagekit.io/31g5nprim/Capture21.PNG"
          caption="Passport/ID and Visa"
          style={styles.marginTop}
          imageStyle={styles.verticalImage}
        />
        <ImageItem
          imageUrl="https://ik.imagekit.io/31g5nprim/003.PNG?updatedAt=1747400540585"
          caption="Thermals"
          style={styles.marginTop}
          imageStyle={styles.verticalImage}
        />
      </View>
      <View style={styles.rightColumn}>
        <ImageItem
          imageUrl="https://ik.imagekit.io/31g5nprim/004.PNG?updatedAt=1747400540881"
          caption="Travel Pillow"
          imageStyle={styles.wideImage}
          style={styles.marginBottom}
        />
        <ImageItem
          imageUrl="https://ik.imagekit.io/31g5nprim/005.PNG?updatedAt=1747400540710"
          caption="Adaptor"
          imageStyle={styles.verticalImage}
          style={styles.marginTop}
        />
        <ImageItem
          imageUrl="https://ik.imagekit.io/31g5nprim/006.PNG?updatedAt=1747400540876"
          caption="Portable Camera"
          imageStyle={styles.verticalImage}
          style={styles.marginTop}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    alignSelf: "center",
    marginTop: 14,
    width: "100%",
    maxWidth: 324,
  },
  leftColumn: {
    flexDirection: "column",
  },
  rightColumn: {
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
    width: 173,
  },
  verticalImage: {
    width: 131,
    aspectRatio: 0.75,
  },
  wideImage: {
    width: "100%",
    aspectRatio: 1.1,
  },
  marginTop: {
    marginTop: 14,
  },
  marginBottom: {
    marginBottom: 32,
  },
});
