import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";

import Header from "./components/Header";
import BookMark from "./components/BookMark";
import About from "./components/About";
import Stats from "./components//Stats";

import { colors } from "../../../styles/global";

export default function () {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />

      <View>
        <BookMark />
        <About />
        <Stats />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
