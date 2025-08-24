import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ItineraryFooter from '../FoodIternary/ItineraryFooter';
import { SearchBar } from './SearchBar';
import { ShoppingDestinationCard } from './ShoppingDestinationCard';
import { useTripStore } from '../../store/tripStore'; // Zustand store
import { useRouter } from 'expo-router'; // Routing
import { useItineraryStore } from '../../store/useItineraryStore';


const destinations = [
  {
    id: 1,
    name: 'Garuda Mall',
    description: 'Modern mall with a variety of brands.',
    location: 'MG Road',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/22444cf7e7a0f032ded65085cf974131f353d885?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e',
    locationIconSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6de2359d95f35d2be364112868a3b6e23af151a0?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e',
    destination: 'Bangalore, Karnataka',
  },
  {
    id: 2,
    name: 'Orion Mall',
    description: 'Spacious center offering shopping and dining.',
    location: 'Rajajinagar',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/547509ddb1a70062d215704290d5ec7d3ecbeb30?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e',
    locationIconSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/638e5a5f8f1dd129d3995931c72547c5699fecf0?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e',
    destination: 'Bangalore, Karnataka',
  },
  {
    id: 3,
    name: 'Nexus Mall',
    description: 'Bustling mall featuring diverse stores.',
    location: 'Koramangala',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/31a3aafabcbcbaa92e3d13f98a91370ae8dd2279?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e',
    locationIconSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1a612dd7184b4820e4a056f4b0dfdc09bc8e4aab?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e',
    destination: 'Bangalore, Karnataka',
  },
  {
    id: 4,
    name: 'Triton Mall',
    description: 'Popular mall with national and international brands.',
    location: 'Jhotwara Road',
    imageSrc:
      'https://ik.imagekit.io/31g5nprim/triton-mall-jaipur-showroom-for-sale-2.webp',
    locationIconSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1a612dd7184b4820e4a056f4b0dfdc09bc8e4aab?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e',
    destination: 'Jaipur, Rajasthan',
  },
  {
    id: 5,
    name: 'The Mall Road Market',
    description: 'Bustling local shopping hub with cozy cafés and handicrafts.',
    location: 'Central Manali',
    imageSrc: 'https://ik.imagekit.io/31g5nprim/mall-road-manali-scaled.webp',
    locationIconSrc:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1a612dd7184b4820e4a056f4b0dfdc09bc8e4aab?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e',
    destination: 'Manali, Himachal Pradesh',
  },
];

function PopularShoppingDestinations() {
  const [searchQuery, setSearchQuery] = useState('');
  const { destination } = useTripStore(); // ✅ Zustand destination
  const router = useRouter();

 const itineraryItems = useItineraryStore((state) => state.items);
const addItem = useItineraryStore((state) => state.addItem);
const removeItem = useItineraryStore((state) => state.removeItem);



  const filteredDestinations = destinations.filter((mall) => {
    const matchesSearch = mall.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDestination =
      destination === '' || mall.destination.toLowerCase().includes(destination.toLowerCase());
    return matchesSearch && matchesDestination;
  });

  // Check if an item is in the store by name (unique key)
  const isInItinerary = (name: string) =>
  itineraryItems.some((item) => item.name === name && item.category === 'shopping');


  // Handler to toggle add/remove item in store
  const handleAddRemove = (mall: typeof destinations[0]) => {
  if (isInItinerary(mall.name)) {
    removeItem(mall.name); // mall.name used as id
  } else {
    addItem({
  id: mall.name, // or use mall.id if you want consistency
  category: 'shopping',
  name: mall.name,
  details: mall.location,
});

  }
};


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 180 }}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {`\nPopular Shopping\nDestinations`}
            </Text>
            <Text style={styles.subtitle}>Find the best places to shop from</Text>
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </View>

          <View style={styles.cardsList}>
            {filteredDestinations.map((mall, index) => (
              <ShoppingDestinationCard
                key={mall.name + index}
                imageSrc={mall.imageSrc}
                name={mall.name}
                description={mall.description}
                location={mall.location}
                locationIconSrc={mall.locationIconSrc}
                destination={mall.destination}
                isAdded={isInItinerary(mall.name)}
                onAdd={() => handleAddRemove(mall)}
              />
            ))}
            {filteredDestinations.length === 0 && (
              <Text style={{ textAlign: 'center', marginTop: 20, color: '#71717A' }}>
                No destinations found for {destination || 'your selection'}.
              </Text>
            )}
          </View>
        </View>
      </ScrollView>

      {/* ✅ View Created Itinerary Button */}
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => router.push('/iternarylist')}
      >
        <Text style={styles.viewButtonText}>View Created Itinerary</Text>
      </TouchableOpacity>

      {/* ✅ Itinerary Footer */}
      <ItineraryFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 24,
    maxWidth: 480,
    alignSelf: 'center',
    marginRight: 6,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingLeft: 6,
  },
  header: {
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 80,
    paddingVertical: 40,
    backgroundColor: '#FBE6DC',
    borderRadius: 24,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#1C1917',
    width: 455,
  },
  subtitle: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#1C1917',
  },
  cardsList: {
    gap: 20,
    marginTop: 20,
  },
  viewButton: {
    position: 'absolute',
    bottom: 80, // Positioned above footer
    left: 60,
    right: 60,
    backgroundColor: '#0891B2',
    paddingVertical: 8,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    zIndex: 1,
  },
  viewButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PopularShoppingDestinations;
