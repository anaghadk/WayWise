// app/shopping.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import PopularShoppingDestinations from '../components/Shopping/PopularShoppingDestinations';


const ShoppingScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <PopularShoppingDestinations />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default ShoppingScreen;
