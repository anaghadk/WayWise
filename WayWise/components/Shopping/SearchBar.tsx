import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

interface SearchBarProps {
  value: string;
  onChange: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4e8a558f44d4a495d34820ad9938f87694d81ffe?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e',
        }}
        style={styles.icon}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Search Menu"
        value={value}
        onChangeText={onChange}
        placeholderTextColor="#71717A"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignSelf: 'stretch',
    paddingHorizontal: 38,
    paddingVertical: 3,
    marginTop: 24,
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  icon: {
    width: 17,
    height: 18,
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    color: '#71717A',
    fontSize: 16,
  },
});