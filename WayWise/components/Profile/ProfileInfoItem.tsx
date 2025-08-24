import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProfileInfoItemProps {
  icon: ReactNode;
  title: string;
  value: ReactNode;
}

const ProfileInfoItem: React.FC<ProfileInfoItemProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textRow}>
        <Text style={styles.title}>{title}:</Text>
        <View style={styles.valueContainer}>
          {typeof value === "string" ? (
            <Text style={styles.value}>{value}</Text>
          ) : (
            value
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  iconContainer: {
    marginRight: 12,
    marginTop: 4,
  },
  textRow: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  title: {
    width: 100, // 👈 fixed width to align values
    fontSize: 20,
    fontWeight: "600",
    color: "#1c1917",
  },
  valueContainer: {
    flex: 1,
  },
  value: {
    fontSize: 20,
  },
});

export default ProfileInfoItem;
