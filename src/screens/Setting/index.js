import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { colors } from "../../styles/global";
import HoteView from "./HoteView/index";

function Setting() {
  return (
    <ScrollView style={styles.container}>
      <HoteView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});

export default Setting;
