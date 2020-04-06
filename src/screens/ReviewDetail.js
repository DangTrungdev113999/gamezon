import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "../styles/global";

function ReviewDetail({ navigation, route }) {

  const { item } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetail</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("review_detail")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Text>{item.title}</Text>
      <Text>{item.body}</Text>
      <Text>{item.rate}</Text>
    </View>
  );
}

export default ReviewDetail;
