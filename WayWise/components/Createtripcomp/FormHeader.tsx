import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { BackIcon } from './Icons';
import { router } from 'expo-router';

interface FormHeaderProps {
  title: string;
  onBack?: () => void;
}

export const FormHeader: React.FC<FormHeaderProps> = ({ title, onBack }) => {
  return (
    <View style={styles.header}>
      <Pressable
  onPress={onBack || (() => router.push('/signin'))}
  style={styles.backButton}
  accessibilityLabel="Go back"
>
  <BackIcon />
</Pressable>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    height: 90,
    backgroundColor: '#FBE6DC', // bg-red-100
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    width: 32,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 51,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    color: '#374151', // text-gray-700
    marginTop: 20,
  },
});
