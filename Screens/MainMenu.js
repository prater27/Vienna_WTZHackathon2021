import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { BottomNavigation, Button, Snackbar } from "react-native-paper";

import ScreenWrapper from "../ScreenWrapper";
// You can import from local files
import AssetExample from "../Components/AssetExample";

import eventsImage from "../Assets/Images/events.png";
import profileImage from "../Assets/Images/profile.png";
import reportsImage from "../Assets/Images/reports.png";
import rewardsImage from "../Assets/Images/rewards2.png";
import settingsImage from "../Assets/Images/settings.png";
import tipsImage from "../Assets/Images/tips.png";
import rideImage from "../Assets/Images/ride.jpg";

// or any pure javascript modules available in npm

function MainMenu({ route, navigation }) {
  const [notification, setNotificationVisible] = React.useState(false);
  const onToggleSnackBar = () => setNotificationVisible(!visible);
  const onDismissSnackBar = () => setNotificationVisible(false);

  function goToRewards() {
    onDismissSnackBar();
    navigation.navigate("Rewards");
  }
  function goToProfile() {
    onDismissSnackBar();
    navigation.navigate("Profile");
  }
  function goToTips() {
    onDismissSnackBar();
    console.log("goToTips");
  }
  function goToEvents() {
    onDismissSnackBar();
    navigation.navigate("Events");
  }
  function goToReporting() {
    onDismissSnackBar();
    navigation.navigate("Reports");
  }
  function readNFC() {
    setNotificationVisible(true);
  }
  function goToSettings() {
    onDismissSnackBar();
    console.log("goToSettings");
  }

  return (
    <View style={stylesButtons.container}>
      <Snackbar
        visible={notification}
        onDismiss={onDismissSnackBar}
        theme={{
          colors: {
            onSurface: "rgba(0, 204, 204, 1)",
            surface: "black",
          },
        }}
      >
        We saved your arrival!
      </Snackbar>
      <View style={stylesButtons.btnContainer}>
        <View style={stylesButtons.btnContainerMiddle}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={goToProfile}
            style={[
              stylesButtons.button,
              { position: "absolute", left: -100, top: 50 },
            ]}
          >
            <Image style={[stylesButtons.button]} source={profileImage} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={goToRewards}
            style={[stylesButtons.button]}
          >
            <Image style={[stylesButtons.button]} source={rewardsImage} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={goToSettings}
            style={[
              stylesButtons.button,
              { position: "absolute", left: 100, top: 50 },
            ]}
          >
            <Image style={[stylesButtons.button]} source={settingsImage} />
          </TouchableOpacity>
        </View>
        <View
          style={[
            stylesButtons.btnContainerMiddle,
            { justifyContent: "center" },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={readNFC}
            style={[
              stylesButtons.button,
              { height: 100, width: 100, borderRadius: 50, margin: 10 },
            ]}
          >
            <Image
              style={[
                stylesButtons.button,
                { height: 100, width: 100, borderRadius: 50, margin: 10 },
              ]}
              source={rideImage}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesButtons.btnContainerMiddle}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={goToTips}
            style={[
              stylesButtons.button,
              { position: "absolute", left: -100, bottom: 60 },
            ]}
          >
            <Image style={[stylesButtons.button]} source={tipsImage} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={goToEvents}
            style={[stylesButtons.button]}
          >
            <Image style={[stylesButtons.button]} source={eventsImage} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={goToReporting}
            style={[
              stylesButtons.button,
              { position: "absolute", right: -100, bottom: 60 },
            ]}
          >
            <Image style={[stylesButtons.button]} source={reportsImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const BottomNavigationExample = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "album", title: "Album", icon: "image-album", color: "#6200ee" },
    {
      key: "library",
      title: "Library",
      icon: "inbox",
      color: "#2962ff",
      badge: true,
    },
    {
      key: "favorites",
      title: "Favorites",
      icon: "heart",
      color: "#00796b",
    },
    {
      key: "purchased",
      title: "Purchased",
      icon: "shopping-music",
      color: "#c51162",
    },
  ]);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={BottomNavigation.SceneMap({
        album: MainMenu,
        library: MainMenu,
        favorites: MainMenu,
        purchased: MainMenu,
      })}
    />
  );
};

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      content: {
        // there is no 'grid' type in RN :(
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gridRowGap: "8px",
        gridColumnGap: "8px",
        padding: 8,
      },
      item: {
        width: "100%",
        height: 100,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "grey",
        borderRadius: Dimensions.get("window").width / 10,
      },
    },
    default: {
      content: {
        flexDirection: "row",
        padding: 4,
      },
      item: {
        height: Dimensions.get("window").width / 2,
        width: "50%",
        padding: 4,
      },
    },
  }),
  photo: {
    flex: 1,
    resizeMode: "cover",
  },
  registerButton: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gridRowGap: "8px",
    gridColumnGap: "8px",
    padding: 8,
    width: "100%",
    height: 100,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "grey",
    borderRadius: Dimensions.get("window").width / 10,
  },
  roundButton1: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
    borderWidth: 3,
    borderColor: "grey",
  },
});

BottomNavigationExample.title = "Bottom Navigation";

export { BottomNavigationExample, MainMenu };

const stylesButtons = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    // flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "paper",
    padding: 8,
    width: 400,
    height: 400,
    borderRadius: 100,
    alignItems: "center",
  },
  btnContainerMiddle: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    margin: 10,
    width: 70,
    height: 70,
    backgroundColor: "paper",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 2,
  },
});

const snackBarstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
