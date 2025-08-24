import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Rect, Path } from "react-native-svg";
import { useRouter } from "expo-router";

export const TripHeader = () => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()}>
        {/* You can replace router.back() with router.push('/your-route') */}
        <Svg width={49} height={25} viewBox="0 0 49 25">
          <Rect
            width={49}
            height={25}
            rx={12.5}
            fill="white"
            fillOpacity={0.4}
          />
          <Path d="M11 13.1H29" stroke="#1E1E1E" strokeWidth={1.6968} />
          <Path
            d="M16.007 18.9432L10 13L16.007 7.00003"
            stroke="#1E1E1E"
            strokeWidth={1.7}
          />
        </Svg>
      </TouchableOpacity>
      <Text style={styles.title}>Featured Trips</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: 64,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 36,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#27272A",
  },
});
