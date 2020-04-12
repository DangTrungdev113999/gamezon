import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function User({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>User</Text>
      <Button
        title="Go to Music Player"
        onPress={() => navigation.navigate("music_player")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default User;
