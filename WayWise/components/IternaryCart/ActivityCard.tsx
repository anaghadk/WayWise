import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  
  iconBgColor?: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  icon,
  title,
  subtitle,
 
  iconBgColor = "#9CA3AF",
}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        {icon}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#FBE6DC",
    borderRadius: 12,
    height: 72,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "#666",
  },
  amount: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
