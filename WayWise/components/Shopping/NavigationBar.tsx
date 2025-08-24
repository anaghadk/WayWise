import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const NavigationBar: React.FC = () => {
  return (
    <View style={styles.nav}>
      <View style={styles.container}>
        <View style={styles.navItem}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13bb1a0ba1f31accf27a40247182600200dced7f?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e' }}
            style={styles.profileIcon}
          />
          <Text style={styles.navText}>Profile</Text>
        </View>
        <View style={styles.navItem}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30e03d558ab72442e317602af6a6e485ea908d42?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e' }}
            style={styles.homeIcon}
          />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3e61e2e523edabbe11eb91a9eec07e4a6537c855?placeholderIfAbsent=true&apiKey=867814f085804505ba7a3401434a381e' }}
            style={styles.tripIcon}
          />
          <Text style={styles.navText}>Trip prep</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    justifyContent: 'center',
    paddingHorizontal: 44,
    paddingVertical: 8,
    backgroundColor: '#FEE2E2',
    borderRadius: 24,
  },
  container: {
    flexDirection: 'row',
    gap: 40,
    alignItems: 'flex-end',
  },
  navItem: {
    alignItems: 'center',
  },
  profileIcon: {
    width: 26,
    height: 37,
    marginBottom: 4,
  },
  homeIcon: {
    width: 30,
    height: 30,
    marginBottom: 4,
  },
  tripIcon: {
    width: 36,
    height: 40,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#71717A',
    textAlign: 'center',
  },
});
