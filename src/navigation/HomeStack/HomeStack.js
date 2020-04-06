import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import Home from "../../screens/Home";
import ReviewDetail from "../../screens/ReviewDetail";

import { headerOption, DrawerIconOption } from "../navigationOption";

const { Navigator, Screen } = createStackNavigator();

const SCREENS = [
  {
    name: "home",
    component: Home,
    options: ({ route, navigation }) => ({
      title: route.params?.title || "Home",
      headerLeft: () => <DrawerIconOption navigation={navigation} />,
    }),
  },
  {
    name: "review_detail",
    component: ReviewDetail,
    options: ({ route }) => ({
      title: route.params?.title || "Review detail",
    }),
  },
];

function HomeStack() {
  return (
    <Navigator initialRouteName="home" screenOptions={headerOption}>
      {SCREENS.map((screen) => (
        <Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Navigator>
  );
}

export default HomeStack;
