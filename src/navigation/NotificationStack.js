import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Notification from "../screens/Notification/index";

import { headerOption } from "./navigationOption";

const { Navigator, Screen } = createStackNavigator();

const SCREENS = [
  {
    name: "notification",
    component: Notification,
    options: ({ route }) => ({
      /* title: route.params?.title || "User profile", */
      headerShown: false,
    }),
  },
];

function NotificationStack() {
  return (
    <Navigator screenOptions={headerOption}>
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

export default NotificationStack;
