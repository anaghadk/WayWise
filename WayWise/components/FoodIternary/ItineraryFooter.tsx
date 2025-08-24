import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const ItineraryFooter = () => {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      <View style={styles.nav}>
        <Pressable style={styles.item} onPress={() => router.push('/profile')}>
          <Image
            source={{ uri: 'https://ik.imagekit.io/31g5nprim/prof.PNG' }}
            style={styles.icon}
          />
          <Text style={styles.label}>Profile</Text>
        </Pressable>

        <Pressable style={styles.item} onPress={() => router.push('/fooditernary')}>
          <Image
            source={{ uri: 'https://ik.imagekit.io/31g5nprim/homei.PNG' }}
            style={styles.icon}
          />
          <Text style={styles.label}>Home</Text>
        </Pressable>

        <Pressable style={styles.item} onPress={() => router.push('/tripprep')}>
          <Image
            source={{ uri: 'https://ik.imagekit.io/31g5nprim/trip.PNG' }}
            style={styles.icon}
          />
          <Text style={styles.label}>Trip prep</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#FBE6DC',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 24,
    marginTop: 20,
    alignItems: 'center',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  item: {
    alignItems: 'center',
    width: 60,
  },
  icon: {
    width: 26,
    height: 26,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#71717a',
  },
});

export default ItineraryFooter;
