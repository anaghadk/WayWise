import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { TripCreationForm } from '../components/Createtripcomp/TripCreationForm';

const CreateTrip = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <TripCreationForm />
    </SafeAreaView>
  );
};

export default CreateTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
