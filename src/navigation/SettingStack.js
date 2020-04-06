import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Setting from "../screens/Setting";

import { headerOption } from "./navigationOption";

const { Navigator, Screen } = createStackNavigator();

const SCREENS = [
  {
    name: "setting",
    component: Setting,
    options: ({ route }) => ({
      title: route.params?.title || "Setting",
    }),
  },
];

function SettingStack() {
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

export default SettingStack;
