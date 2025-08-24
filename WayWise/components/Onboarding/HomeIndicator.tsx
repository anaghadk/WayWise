import React from 'react';
import { View, StyleSheet } from 'react-native';

const HomeIndicator = () => {
  return <View style={styles.indicator} />;
};

const styles = StyleSheet.create({
  indicator: {
    marginTop: 36, // mt-9
    backgroundColor: '#000000',
    height: 5,
    width: 134,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 8,
  },
});

export default HomeIndicator;
