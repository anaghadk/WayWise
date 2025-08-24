import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type ClothingItem = {
  imageUrl: string;
  caption: string;
  wide?: boolean;
};

const coldItems: ClothingItem[] = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b60f850c49cbe83205555a120b07e3ff2e1e239b?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572",
    caption: "A fur jacket",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/1941d103e8b8c16e796247db1875ea8f5548ecaf?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572",
    caption: "Warm pair of gloves",
    wide: true,
    
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3a0932cf39fba3e6551e64c50b64ab151cd9680e?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572",
    caption: "Long Boots",
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/84054975e81b89738b5ced18f00f321a1a0b9ef6?placeholderIfAbsent=true&apiKey=131e76d7b95041b7af186d305b731572",
    caption: "A scarf",
  },
];

const hotItems: ClothingItem[] = [
  {
    imageUrl: "https://ik.imagekit.io/31g5nprim/91vBF+JIW-L._AC_UY1100_.jpg",
    caption: "Loose cotton pants",
  },
  {
    imageUrl: "https://ik.imagekit.io/31g5nprim/WhiteCottonSleevelessShirt1%20(1).webp",
    caption: "Sleeveless cotton tops",
  },
  {
    imageUrl: "https://ik.imagekit.io/31g5nprim/123depositphotos_241321532-stock-photo-young-woman-on-bridge-summer.jpg",
    caption: "A hat",
    wide: true,
  },
  {
    imageUrl: "https://ik.imagekit.io/31g5nprim/white-women-sandals-shoes-pair-isolated-on-light-grey-background-2JHNB41.jpg",
    caption: "A pair of sandals",
  },
];

const commonItems: ClothingItem[] = [
  {
    imageUrl: "https://ik.imagekit.io/31g5nprim/mist.PNG?updatedAt=1747398406655",
    caption: "Mist spray",
    wide: true,
  },
  {
    imageUrl: "https://ik.imagekit.io/31g5nprim/sunscreen.PNG?updatedAt=1747398286501",
    caption: "Moisturizer",
    wide: true,
  },
];

export const getClothingItems = (isCold: boolean): ClothingItem[] => {
  const selected = isCold ? coldItems : hotItems;
  return [...selected, ...commonItems];
};

const Item: React.FC<{ item: ClothingItem }> = ({ item }) => (
  <View style={styles.item}>
    <Image
      source={{ uri: item.imageUrl }}
      style={item.wide ? styles.wideImage : styles.verticalImage}
      resizeMode="cover"
    />
    <Text style={styles.caption}>{item.caption}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 8,
    alignItems: "center",
  },
  verticalImage: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  wideImage: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  caption: {
    marginTop: 8,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
});

const ClothingGrid = {
  getItems: getClothingItems,
  Item,
};

export default ClothingGrid;
