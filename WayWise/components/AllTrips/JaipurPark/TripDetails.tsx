import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Path, Text as SvgText } from "react-native-svg";

export const TripDetails = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Nahargarh {'\n'}Biological Park</Text>
        <Svg width={49} height={22} viewBox="0 0 49 22">
          <SvgText
            fill="#636363"
            x="22"
            y="17.9494"
            fontSize="17.7358"
            fontFamily="Inter"
          >
            4.2
          </SvgText>
          <Path
            d="M12.7559 7.63281L12.7793 7.70703H20.1719L14.25 12.2139L14.1904 12.2588L14.2129 12.3301L16.4717 19.6123L10.5645 15.1172L10.5 15.0684L10.4355 15.1172L4.52734 19.6123L6.78711 12.3301L6.80957 12.2588L6.75 12.2139L0.828125 7.70703H8.2207L8.24414 7.63281L10.5 0.358398L12.7559 7.63281Z"
            fill="#E1D800"
            stroke="#AFAFAF"
            strokeWidth="0.21283"
          />
        </Svg>
      </View>
      <Text style={styles.description}>
        Nahargarh Biological Park is a lush wildlife reserve on the outskirts of Jaipur,
known for its rich biodiversity and large enclosures. It's a popular spot for
safaris, nature walks, and spotting big cats.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: 96,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#27272A",
  },
  description: {
    marginTop: 16,
    fontSize: 16,
    color: "#52525B",
  },
});
