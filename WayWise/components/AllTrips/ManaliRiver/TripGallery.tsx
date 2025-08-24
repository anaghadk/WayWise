import React from "react";
import { View, Image, StyleSheet } from "react-native";

export const TripGallery = () => {
  const thumbnails = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac0e8388c50d1f2bb8a8d9cebcbc47f290282726",
      alt: "Ulsoor Lake view 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cf08e9bd03c8edb8a668fa0d99eaf3d70075b99",
      alt: "Ulsoor Lake view 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2d4f81f3253dbfcb2a04c45b649a1ddaf18cdb6",
      alt: "Ulsoor Lake view 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b316d943994c41c6485d73e38c90c855e4c5d597",
      alt: "Ulsoor Lake view 4",
    },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://ik.imagekit.io/31g5nprim/images%20(2).jpg",
        }}
        style={styles.mainImage}
        accessibilityLabel="Beas River"
      />
      <View style={styles.thumbnailContainer}>
        {thumbnails.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image.src }}
            style={styles.thumbnail}
            accessibilityLabel={image.alt}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  mainImage: {
    width: 344,
    height: 209,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  thumbnailContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    marginTop: 10,
  },
  thumbnail: {
    width: 59,
    height: 58,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#FFF",
  },
});
