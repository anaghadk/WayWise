import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ActivitySection {
  title: string;
  items: string[];
}

interface ItineraryListProps {
  sections: ActivitySection[];
  additionalItems?: string[];
}

export const ItineraryList: React.FC<ItineraryListProps> = ({
  sections,
  additionalItems = [],
}) => {
  return (
    <View style={styles.container}>
      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <View style={styles.listItem}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
          {section.items.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.listItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      ))}
      {additionalItems.map((item, index) => (
        <Text key={index} style={styles.itemText}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  section: {
    marginBottom: 16,
  },
  listItem: {
    marginVertical: 2,
  },
  sectionTitle: {
    fontFamily: "Lato",
    fontWeight: "700",
    color: "#000000",
  },
  itemText: {
    fontFamily: "Lato",
    fontWeight: "400",
    color: "#000000",
  },
});
