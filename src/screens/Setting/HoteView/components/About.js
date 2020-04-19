import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { gs, colors } from "../../../../styles/global";

const hotel = {
  name: "Mt. Catlin Hotal",
  price: "$967",
  location: "New York",
  about:
    "I am Trung, I am 21 years old, I am programming, My skill is react, react-native, html, css,I am Trung, I am 21 years old, I am programming, My skill is react, react-native, html, css",
};

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={gs.title}>{hotel.name}</Text>

      <Text style={styles.info}>
        {hotel.price} &#8226; {hotel.price}
      </Text>

      <View style={gs.divider} />

      <Text style={gs.sectionTitle}>About {hotel.name}</Text>
      <Text style={styles.about}>{hotel.about}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    backgroundColor: colors.darkBg,
  },
  info: {
    color: colors.textSec,
    fontWeight: "400",
    marginTop: 8,
  },
  about: {
    color: colors.textSec,
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 20,
    marginTop: 8,
  },
});

export default About;
