import React, { useEffect } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FormHeader } from './FormHeader';
import { DatePickerField } from './DatePickerField';
import { router } from 'expo-router';
import { useTripStore } from '../../store/tripStore'; // adjust if needed

export const TripCreationForm = () => {
  const destinations = [
    'Bangalore, Karnataka',
    'Jaipur, Rajasthan',
    'Manali, Himachal Pradesh',
  ];

  const accommodationOptions: { [key: string]: string[] } = {
    'Bangalore, Karnataka': ['Indiranagar', 'RR Nagar'],
    'Jaipur, Rajasthan': ['MI Road (Mirza Ismail Road)', 'Bani Park'],
    'Manali, Himachal Pradesh': ['Old Manali', 'Mall Road'],
  };

  // Zustand state
  const {
    destination,
    accommodation,
    setDestination,
    setAccommodation,
    startDate,
    endDate,
  } = useTripStore();

  // Initialize defaults on first render
  useEffect(() => {
    if (!destination) {
      setDestination(destinations[0]);
      setAccommodation(accommodationOptions[destinations[0]][0]);
    }
  }, []);

  const handleCreateTrip = () => {
    console.log('Creating trip...');
    console.log('Destination:', destination);
    console.log('Accommodation:', accommodation);
    console.log('Dates:', startDate, 'to', endDate);

    router.push('/fooditernary');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <FormHeader title="Create New Trip" />

        <View style={styles.content}>
          {/* Destination Picker */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Destination(s)</Text>
            <View style={styles.pickerBox}>
              <Picker
                selectedValue={destination}
                onValueChange={(itemValue) => {
                  setDestination(itemValue);
                  setAccommodation(accommodationOptions[itemValue][0]);
                }}
              >
                {destinations.map((dest) => (
                  <Picker.Item label={dest} value={dest} key={dest} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Date Picker (from Zustand inside DatePickerField) */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Duration of trip</Text>
            <DatePickerField />
          </View>

          {/* Accommodation Picker */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Choose your accommodation</Text>
            <View style={styles.pickerBox}>
              <Picker
                selectedValue={accommodation}
                onValueChange={(itemValue) => setAccommodation(itemValue)}
              >
                {accommodationOptions[destination]?.map((acc) => (
                  <Picker.Item label={acc} value={acc} key={acc} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Create Button */}
          <View style={styles.buttonContainer}>
            <Pressable style={styles.createButton} onPress={handleCreateTrip}>
              <Text style={styles.createButtonText}>Create Trip</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    maxWidth: 390,
    alignSelf: 'center',
  },
  content: {
    flexDirection: 'column',
    gap: 20,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  section: {
    flexDirection: 'column',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 24,
    color: '#374151',
  },
  pickerBox: {
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#94A3B8',
    overflow: 'hidden',
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 20,
  },
  createButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#0891B2',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#EEF2FF',
  },
});

export default TripCreationForm;
