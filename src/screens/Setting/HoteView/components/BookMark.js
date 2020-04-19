import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { colors, gs } from "../../../../styles/global";

const BookMark = () => {
  return (
    <View style={styles.bookmark}>
      <Feather name="bookmark" size="24" color={colors.pink} />
    </View>
  );
};

const styles = StyleSheet.create({
  bookmark: {
    ...gs.center,
    position: "absolute",
    width: 56,
    height: 56,
    backgroundColor: colors.text,
    borderRadius: 56 / 2,
    right: 32,
    top: -56 / 2,
    zIndex: 10,
  },
});

export default BookMark;
