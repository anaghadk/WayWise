import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';

import ItineraryHeader from '../components/FoodIternary/ItineraryHeader';
import PopularChoices from '../components/FoodIternary/PopularChoices';
import ItineraryFooter from '../components/FoodIternary/ItineraryFooter';
import { useRouter } from "expo-router";

const FoodItinerary = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ItineraryHeader />
        <PopularChoices />

        {/* ✅ Add the missing button */}
        <TouchableOpacity
          style={styles.viewItineraryButton}
          onPress={() => 
            {console.log("Navigating to itinerary...");
            router.push("/iternarylist")}}
        >
          <Text style={styles.viewItineraryText}>View Itinerary</Text>
        </TouchableOpacity>
      </ScrollView>

      <ItineraryFooter />
    </View>
  );
};

export default FoodItinerary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 100,
  },
  viewItineraryButton: {
    backgroundColor: "#0891b2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 8,
    alignSelf: "center",
  },
  viewItineraryText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
