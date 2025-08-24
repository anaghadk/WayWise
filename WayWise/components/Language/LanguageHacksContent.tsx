"use client";
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

function LanguageHacksContent() {
  return (
    <View style={styles.container}>

      <Text style={styles.intro}>
            Visiting Bangalore, the capital of Karnataka, is an exciting experience!
            Known as the "Silicon Valley of India," Bangalore offers a perfect mix of
            modernity, history, and culture.
          </Text>
          <View style={styles.spacer} />

      <View style={styles.listItem}>
        <Text style={styles.text}>
          • Kannada is the official language, but English is widely spoken,
          especially in urban areas. Hindi and Tamil are also understood by
          many.
        </Text>
      </View>

      <View style={styles.spacer} />

      <Text style={styles.heading}>Key Phrases (in Kannada):</Text>

      <View style={styles.spacer} />

      <View style={styles.list}>
        <Text style={styles.text}>• Hello: "Namaskara"</Text>
        <Text style={styles.text}>• Thank you: "Dhanyavaada"</Text>
        <Text style={styles.text}>
          • How much does it cost?: "Idhige yenu koortaare?"
        </Text>
        <Text style={styles.text}>• Where is... ?: "Yelli ... idhe?"</Text>
      </View>

      <View style={styles.spacer} />

      <Text style={styles.text}>
        <Text style={styles.bold}>Dress modestly:</Text> While Bangalore is
        modern, it's always good to dress conservatively when visiting temples
        or religious places.
      </Text>

      <View style={styles.spacer} />

      <Text style={styles.text}>
        <Text style={styles.bold}>Greetings:</Text> People typically greet with
        a handshake or a polite "Namaskara." A slight bow of the head is also
        common in traditional settings.
      </Text>

      <View style={styles.spacer} />

      <Text style={styles.text}>
        <Text style={styles.bold}>Bengaluru Metro </Text>is a convenient and
        affordable way to travel within the city. It connects key areas like MG
        Road, Koramangala, and Indiranagar.
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
