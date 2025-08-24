import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

const CategorySelector = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b9315674c8aa2d3aeedb2755cdd4114ba2a5e72",
        }}
        style={styles.image}
      />

        <Pressable onPress={() => router.push("/places")}>
      <View style={styles.selectorBox}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb7d04a3c63b4929c4a2124e5605c65b755df669",
          }}
          style={styles.icon}
        />
        <Text style={styles.label}>Places</Text>
      </View>
      </Pressable>

      <Pressable onPress={() => router.push("/shopping")}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/52ca0450f4d28f9999ae66707bbc792bb1b83010",
          }}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
};

export default CategorySelector;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    gap: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  selectorBox: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderColor: "#a8a29e",
    borderWidth: 1,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  icon: {
    width: 34,
    height: 35,
  },
  label: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 2,
    color: "#000",
  },
});

