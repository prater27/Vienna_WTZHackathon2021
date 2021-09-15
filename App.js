import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./CustomProperties/Themes";

//import TopBar from "./Components/TopBar";
import { Login } from "./Screens/Login";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./Stack";

//          <TopBar />

export default function App() {
  const [registered, setRegistered] = useState(false);
  console.log("APP   ", registered);
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          {registered ? <AppStack /> : <Login setRegistered={setRegistered} />}
        </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
