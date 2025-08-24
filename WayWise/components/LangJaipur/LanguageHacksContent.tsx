"use client";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

function LanguageHacksContent() {
  return (
    <View style={styles.container}>

      <Text style={styles.intro}>
             Visiting Jaipur, the capital of Rajasthan, 
             is a royal and colourful experience! 
             Known as the "Pink City," Jaipur is 
             famous for its historic forts, palaces, 
             and vibrant bazaars.
          </Text>
          <View style={styles.spacer} />

      <View style={styles.listItem}>
        <Text style={styles.text}>
          • Hindi is the official language, 
          and Rajasthani dialects are also spoken. 
          English is commonly understood in tourist
           areas.
        </Text>
      </View>

      <View style={styles.spacer} />

      <Text style={styles.heading}>Key Phrases (in Hindi):</Text>

      <View style={styles.spacer} />

      <View style={styles.list}>
        <Text style={styles.text}>• Hello: "Namaste"</Text>
        <Text style={styles.text}>• Thank you: "Dhanyavaad"</Text>
        <Text style={styles.text}>
          • How much does it cost?: "Iska daam kitna hai?"
        </Text>
        <Text style={styles.text}>• Where is... ?: "... kahan hai?"</Text>
      </View>

      <View style={styles.spacer} />

      <Text style={styles.text}>
        <Text style={styles.bold}>Dress modestly:</Text> While Jaipur is tourist-friendly, it’s respectful to wear modest clothing, especially in heritage and religious sites.
      </Text>

      <View style={styles.spacer} />

      <Text style={styles.text}>
        <Text style={styles.bold}>Greetings:</Text> People typically greet with
        a handshake or a polite "Namaskara." A slight bow of the head is also
        common in traditional settings.
      </Text>

      <View style={styles.spacer} />

      <Text style={styles.text}>
        <Text style={styles.bold}>Getting around: </Text>Auto-rickshaws and app-based cabs (like Ola/Uber) are convenient. For short distances within the old city, cycle-rickshaws are a fun and local option.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignSelf: "center",
     // equivalent to mt-7
    fontSize: 14, // equivalent to text-sm
  },
  text: {
    fontSize: 16,
    color: "#000000", // equivalent to text-black
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  list: {
    marginBottom: 4,
  },
  listItem: {
    flexDirection: "row",
    paddingRight: 8,
  },
  spacer: {
    height: 16, // equivalent to <br />
  },
  intro: {
    
    marginTop: 40, // equivalent to mt-5
    fontSize: 18, // equivalent to text-sm
    textAlign: "center",
    color: "#292524", // equivalent to text-stone-900
  },
});

export default LanguageHacksContent;
