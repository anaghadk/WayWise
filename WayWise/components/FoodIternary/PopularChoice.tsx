import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  name: string;
  location: string;
  description: string;
  imageSrc: string;
  bookmarkSrc: string;
  isSelected: boolean;
  onSelect: () => void;
  onNavigate?: () => void; // Optional navigation prop
};

const PopularChoice: React.FC<Props> = ({
  name,
  location,
  description,
  imageSrc,
  bookmarkSrc,
  isSelected,
  onSelect,
  onNavigate,
}) => {
  const parts = description.split('.');

  return (
    <View style={[styles.container, isSelected && styles.selected]}>
      <Image source={{ uri: imageSrc }} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Image source={{ uri: bookmarkSrc }} style={styles.bookmark} />
        </View>
        <View style={styles.locationRow}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7a985d8bb08b789e14a292d24db0295b37082532?placeholderIfAbsent=true&apiKey=c83360269d6d4476a58a4e391fa06aa9',
            }}
            style={styles.pin}
          />
          <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>
            {parts[0]}.{'\n'}
            {parts[1]}.{'\n'}
            {parts[2] || ''}
          </Text>
          <TouchableOpacity
            style={isSelected ? styles.selectBtnSelected : styles.selectBtn}
            onPress={() => {
              onSelect();
              onNavigate?.(); // Safe call only if onNavigate is defined
            }}
          >
            <Text style={styles.selectBtnText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#FFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
    maxWidth: 349,
  },
  selected: {
    paddingBottom: 16,
  },
  image: {
    width: 60,
    height: 72,
    borderRadius: 8,
    marginTop: 10,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 14,
  },
  bookmark: {
    width: 30,
    height: 30,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  pin: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  location: {
    fontSize: 12,
    color: '#888',
  },
  descriptionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  description: {
    fontSize: 12,
    flex: 1,
    paddingRight: 6,
  },
  selectBtn: {
    marginTop: 24,
  },
  selectBtnSelected: {
    marginTop: 24,
    backgroundColor: '#fddede',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  selectBtnText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default PopularChoice;
