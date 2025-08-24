import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface ShoppingDestinationCardProps {
  imageSrc: string;
  name: string;
  description: string;
  location: string;
  locationIconSrc: string;
  destination: string;
  isAdded: boolean; // added prop to reflect state
  onAdd: () => void; // no param needed, pass full object from parent
}

export const ShoppingDestinationCard: React.FC<ShoppingDestinationCardProps> = ({
  imageSrc,
  name,
  description,
  location,
  locationIconSrc,
  destination,
  isAdded,
  onAdd,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageSrc }} style={styles.mainImage} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.destinationText}>{destination}</Text>

        <View style={styles.footer}>
          <View style={styles.locationWrapper}>
            <Image source={{ uri: locationIconSrc }} style={styles.locationIcon} />
            <Text numberOfLines={2} style={styles.locationText}>{location}</Text>
          </View>
          <TouchableOpacity
            style={[styles.addButton, isAdded && styles.addedButton]}
            onPress={onAdd}
          >
            <Text style={[styles.addButtonText, isAdded && styles.addedButtonText]}>
              {isAdded ? 'Added' : '+ Add'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 28,
    paddingBottom: 10,
    borderRadius: 24,
    backgroundColor: '#FAF9F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  mainImage: {
    width: 159,
    height: 106,
    borderRadius: 24,
  },
  content: {
    flex: 1,
    marginTop: 14,
    marginLeft: 10,
  },
  name: {
    fontWeight: '800',
    textAlign: 'center',
    color: '#18181B',
  },
  description: {
    marginTop: 6,
    color: '#000',
  },
  destinationText: {
    marginTop: 6,
    fontSize: 12,
    color: '#4B5563',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  locationWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 6,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  locationText: {
    flex: 1,
    color: '#000',
    fontSize: 12,
    flexWrap: 'wrap',
  },
  addButton: {
    backgroundColor: '#0891B2',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  addedButton: {
    backgroundColor: '#10B981',
  },
  addButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
  },
  addedButtonText: {
    color: 'white',
  },
});
