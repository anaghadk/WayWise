"use client";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

function LanguageHacksContent() {
  return (
    <View style={styles.container}>

      <Text style={styles.intro}>
            Visiting Manali, in Himachal Pradesh, is a serene and adventurous retreat! Nestled in the Himalayas, Manali is known for its snow-capped mountains, scenic views, and thrilling activities.
          </Text>
          <View style={styles.spacer} />

      <View style={styles.listItem}>
        <Text style={styles.text}>
          • Hindi is widely spoken, and Pahari (a local Himachali dialect) is common among locals. English is understood in most tourist areas.
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
        <Text style={styles.bold}>Dress modestly:</Text> Depending on the season, layers are essential. During temple visits, modest attire is appreciated.
      </Text>

      <View style={styles.spacer} />

      <Text style={styles.text}>
        <Text style={styles.bold}>Greetings:</Text> People typically greet with
        a handshake or a polite "Namaskara." A slight bow of the head is also
        common in traditional settings.
      </Text>

      <View style={styles.spacer} />

      <Text style={styles.text}>
        <Text style={styles.bold}>Getting around: </Text>Local taxis, shared jeeps, and scooters for hire are available. Roads can be narrow, so always plan buffer time during snow or rain.
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
