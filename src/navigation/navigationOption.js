import React from "react";
import { TouchableOpacity, Platform, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// const forFade = ({ current }) => ({
//   cardStyle: {
//     opacity: current.progress,
//   },
// });

const headerOption = {
  headerStyle: {
    backgroundColor: "#f4511e",
    height: Platform.OS == 'android' ? 90 : 70,
  },
  headerTintColor: "#000",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign: 'center',
  headerBackTitle: 'Back',
  // headerBackTitleVisible: true,
  headerLeftContainerStyle: {
    paddingLeft: 2,
  },
  // headerTransparent: true,
  headerBackground: () => (
    <Image source={require('../../assets/game_bg.png')} style={{ width: '100%', height: '100%' }} />
  ),
  // cardStyleInterpolator: forFade,
};

const DrawerIconOption = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <Ionicons
      name="md-menu"
      size={27}
      color="#000"
      style={{ marginLeft: 15 }}
    />
  </TouchableOpacity>
);

export { headerOption, DrawerIconOption };
