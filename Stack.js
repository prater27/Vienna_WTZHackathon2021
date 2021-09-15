import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainMenu } from "./Screens/MainMenu";
import { Profile } from "./Screens/Profile";
import { Rewards } from "./Screens/Reward";
import { Reports } from "./Screens/Reporting";
import { Events } from "./Screens/Events";

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{ title: "MainMenu" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="Rewards"
        component={Rewards}
        options={{ title: "Rewards" }}
      />
      <Stack.Screen
        name="Reports"
        component={Reports}
        options={{ title: "Reports" }}
      />
      <Stack.Screen
        name="Events"
        component={Events}
        options={{ title: "Events" }}
      />
    </Stack.Navigator>
  );
}

export { AppStack };
