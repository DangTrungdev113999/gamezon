import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeDrawer from "./HomeStack/index";
import UserStack from "./UserStack";
import SettingStack from "./SettingStack";
import NotificationStack from "./NotificationStack";

import { Ionicons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

const SCREENS = [
  {
    name: "Home",
    component: HomeDrawer,
  },
  {
    name: "User",
    component: UserStack,
  },
  {
    name: "Notification",
    component: NotificationStack,
  },
  {
    name: "Setting",
    component: SettingStack,
  },
];

function StackNavigator() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Setting"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "User") {
              iconName = focused ? "ios-list-box" : "ios-list";
            } else if (route.name === "Setting") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Notification") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        {SCREENS.map((screen) => (
          <Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
