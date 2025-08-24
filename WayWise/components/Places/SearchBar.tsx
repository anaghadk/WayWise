import * as React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#A1A1AA"
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "white",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  searchIcon: {
    alignSelf: "flex-start",
    width: 18,
    height: 15,
    borderRadius: 999,
    backgroundColor: "#71717A",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#A1A1AA",
  },
});
