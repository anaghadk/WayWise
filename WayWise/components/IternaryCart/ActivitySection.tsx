import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ActivitySectionProps {
  title: string;
  children: React.ReactNode;
}

export const ActivitySection: React.FC<ActivitySectionProps> = ({
  title,
  children,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "column",
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flexDirection: "column",
    gap: 12,
  },
});
