import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import Card from '../components/Card';

import { globalStyles, images } from "../styles/global";
function ReviewDetail({ navigation, route }) {

  const { item } = route.params;
  return (
    <View style={globalStyles.container}>

      <Button title="Go to Home" onPress={() => navigation.navigate("home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Card>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        <View style={styles.rating}>
          <Text>Gamezone rating</Text>
          <Image source={images[item.rating]}  />
        </View>
      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
})

export default ReviewDetail;
