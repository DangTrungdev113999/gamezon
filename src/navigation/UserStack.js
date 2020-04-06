import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import User from "../screens/User";

import { headerOption } from "./navigationOption";

const { Navigator, Screen } = createStackNavigator();

const SCREENS = [
  {
    name: "user",
    component: User,
    options: ({ route }) => ({
      title: route.params?.title || "User profile",
    }),
  },
];

function UserStack() {
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

export default UserStack;
