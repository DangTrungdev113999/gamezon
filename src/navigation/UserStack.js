import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import User from "../screens/User";
import MusicPlayer from "../screens/MusicPlayer/index";

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
  {
    name: "music_player",
    component: MusicPlayer,
    options: ({ route }) => ({
      headerShown: false,
    }),
  },
];

function UserStack() {
  return (
    <Navigator initialRouteName="music_player" screenOptions={headerOption}>
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
