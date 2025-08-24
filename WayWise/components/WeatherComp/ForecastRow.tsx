import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Animated,
  StyleSheet,
} from "react-native";

interface Props {
  hours: string[];
  temperatures: string[];
  onHourPress: (temp: string) => void;
}

export default function ForecastRow({
  hours,
  temperatures,
  onHourPress,
}: Props) {
  const [blink] = useState(hours.map(() => new Animated.Value(1)));

  function handlePress(idx: number) {
    Animated.sequence([
      Animated.timing(blink[idx], { toValue: 0, duration: 100, useNativeDriver: true }),
      Animated.timing(blink[idx], { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
    onHourPress(temperatures[idx]);
  }

  return (
    <>
      <View style={styles.row}>
        {hours.map((h, i) => (
          <Pressable key={i} onPress={() => handlePress(i)} style={styles.item}>
            <Animated.Text style={[styles.hourText, { opacity: blink[i] }]}>
              {h}
            </Animated.Text>
          </Pressable>
        ))}
        {/* Fill remaining space with invisible items if less than 5 */}
        {Array.from({ length: 5 - hours.length }).map((_, i) => (
          <View key={`h-empty-${i}`} style={styles.item} />
        ))}
      </View>
      <View style={[styles.row, { marginTop: 16 }]}>
        {temperatures.map((t, i) => (
          <View key={i} style={styles.item}>
            <Text style={styles.tempText}>{t}°</Text>
          </View>
        ))}
        {Array.from({ length: 5 - temperatures.length }).map((_, i) => (
          <View key={`t-empty-${i}`} style={styles.item} />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  item: {
    flex: 1,
    alignItems: "center",
  },
  hourText: {
    color: "white",
    fontSize: 12,
  },
  tempText: {
    color: "white",
    fontSize: 12,
  },
});
