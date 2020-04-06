import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const headerOption = {
  headerStyle: {
    backgroundColor: "#f4511e",
    height: 50,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const DrawerIconOption = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <Ionicons
      name="md-menu"
      size={24}
      color="#fff"
      style={{ marginLeft: 10 }}
    />
  </TouchableOpacity>
);

export { headerOption, DrawerIconOption };
