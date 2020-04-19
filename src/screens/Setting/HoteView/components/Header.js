import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import { AntDesign, Entypo } from "@expo/vector-icons";

import { colors, gs } from "../../../../styles/global";

export default function Header() {
  return (
    <View>
      <Image
        source={require("../../../../../assets/hotel.jpg")}
        style={{ width: "100%", height: 400 }}
      />

      <View style={styles.topButtons}>
        <AntDesign name="close" size="24" color="#fff" />
        <View style={gs.rowCenter}>
          <AntDesign name="save" size="24" style={styles.TopButtonRight} />
          <AntDesign name="sharealt" size="24" style={styles.TopButtonRight} />
          <Entypo
            name="dots-three-vertical"
            size="18"
            style={styles.TopButtonRight}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topButtons: {
    ...gs.rowBetween,
    position: "absolute",
    top: 42,
    left: 32,
    right: 32,
  },
  TopButtonRight: {
    marginLeft: 12,
    color: '#fff',
  }
});
