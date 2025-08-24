import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SearchBar } from "../Shopping/SearchBar"; // Adjust path as needed

interface Props {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
}

export const RestaurantHeader: React.FC<Props> = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/115326a8e40b17b37cf82bc91724857582794310?placeholderIfAbsent=true&apiKey=dcd895ca795b4c71b1e9559091dae2f5",
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>CONRAD</Text>
      <Text style={styles.description}>
        Find the best selling dishes in the restaurant. All meals are prepared fresh.
      </Text>
      <View style={styles.searchContainer}>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    
    paddingTop: 8,
    paddingRight: 20,
    paddingBottom: 24,
    paddingLeft: 20,
    width: "100%",
    backgroundColor: "#FBE6DC",
    borderRadius: 24,
  },
  logo: {
    width: 31,
    aspectRatio: 1,
    alignSelf: "flex-end",
  },
  title: {
    alignSelf: "center",
    marginTop: 14,
    fontSize: 24,
    color: "#1C1917",
    
  },
  description: {
    alignSelf: "flex-start",
    marginTop: 24,
    fontSize: 18,
    textAlign: "center",
    color: "#1C1917",
  },
  searchContainer: {
  marginTop: 16,
  paddingHorizontal: 0,
},

});
