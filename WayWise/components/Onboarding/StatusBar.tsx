import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomStatusBar = () => {
  return (
    <View style={styles.container}>
     
      <Image
        source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5b0137aeb438066d318292a19f28f9d8888e28f8?placeholderIfAbsent=true&apiKey=c83360269d6d4476a58a4e391fa06aa9' }}
        style={styles.statusIcons}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    paddingVertical: 4,
    paddingRight: 12,
    zIndex: 1,
  },
  statusIcons: {
    width: 77,
    aspectRatio: 5.92,
  },
});

export default CustomStatusBar;

