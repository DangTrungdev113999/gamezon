import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

import { headerDrawerOption } from "../navigationOption";

const { Navigator, Screen } = createDrawerNavigator();


const SCREENS = [
  {
    name: "home_stack",
    component: HomeStack,
    options: ({ route }) => ({
      title: "Home",
    }),
  },
  {
    name: "about_stack",
    component: AboutStack,
    options: ({ route }) => ({
      title: "About",
    }),
  },
];

function HomeDrawer() {
  return (
    <Navigator screenOptions={headerDrawerOption}>
      {SCREENS.map((screen) => (
        <Screen
          name={screen.name}
          component={screen.component}
          options={screen?.options}
        />
      ))}
    </Navigator>
  );
}

export default HomeDrawer;
