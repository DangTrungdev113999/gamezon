import React, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";

import Card from '../components/Card';
import { globalStyles } from "../styles/global";

function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Leaning nodejs", body: "this is body", rate: 4, key: "1" },
    { title: "Leaning reactjs", body: "this is body", rate: 5, key: "2" },
    { title: "Leaning react-native", body: "this is body", rate: 3, key: "3" },
    { title: "Leaning mongodb", body: "this is body", rate: 1, key: "4" },
    { title: "Leaning sql-server", body: "this is body", rate: 2, key: "5" },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("review_detail", { item })}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Home;
