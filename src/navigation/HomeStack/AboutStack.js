import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../../screens/About";

import { headerOption, DrawerIconOption } from "../navigationOption";

const { Navigator, Screen } = createStackNavigator();

const SCREENS = [
  {
    name: "about",
    component: About,
    options: ({ route, navigation }) => ({
      title: route.params?.title || "About",
      headerLeft: () => <DrawerIconOption navigation={navigation} />,
    }),
  },
];

function AboutStack() {
  return (
    <Navigator screenOptions={headerOption}>
      {SCREENS.map((screen) => (
        <Screen
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Navigator>
  );
}

export default AboutStack;
