import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StatusBar,
  TextInput,
  Paragraph,
} from "react-native";

import { Button, Dialog } from "react-native-paper";

import { Camera } from "expo-camera";
import reportImage from "../Assets/Images/reports.png";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");
const countries = ["Stolen bike", "Maintenance", "Improvement"];

function ReportCamera({ setTakePicture }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.cameraContainer}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Button
              onPress={() => {
                setTakePicture(false);
              }}
            >
              Add Picture to Report
            </Button>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

function ReportStatusNotification({ visible, setSendReport }) {
  return (
    <Dialog visible={visible} onDismiss={() => setSendReport(false)}>
      <Dialog.Title>Alert</Dialog.Title>
      <Dialog.Content>
        <Paragraph>Report succesfully sent!</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={() => setSendReport(false)}>Close</Button>
      </Dialog.Actions>
    </Dialog>
  );
}
function Reports() {
  const [takePicture, setTakePicture] = useState(false);
  const [description, setDescription] = useState("");
  const [sendReport, setSendReport] = useState(false);

  const renderHeader = () => {
    return (
      <View style={[dropdownStyles.header, styles.shadow]}>
        <Text style={dropdownStyles.headerTitle}>{"Choose report type"}</Text>
      </View>
    );
  };

  return (
    <View style={styles.cameraContainer}>
      <ReportStatusNotification
        sentSendReport={setSendReport}
        visible={sendReport}
      />
      {takePicture ? (
        <ReportCamera setTakePicture={setTakePicture} />
      ) : (
        <View style={dropdownStyles.viewContainer}>
          <SafeAreaView style={dropdownStyles.saveAreaViewContainer}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <View style={dropdownStyles.viewContainer}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
                contentContainerStyle={dropdownStyles.scrollViewContainer}
              >
                <SelectDropdown
                  data={countries}
                  // defaultValueByIndex={1}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  defaultButtonText={"Select Report type"}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  buttonStyle={dropdownStyles.dropdown2BtnStyle}
                  buttonTextStyle={dropdownStyles.dropdown2BtnTxtStyle}
                  renderDropdownIcon={() => {
                    return (
                      <FontAwesome
                        name="chevron-down"
                        color={"#FFF"}
                        size={18}
                      />
                    );
                  }}
                  dropdownIconPosition={"right"}
                  dropdownStyle={dropdownStyles.dropdown2DropdownStyle}
                  rowStyle={dropdownStyles.dropdown2RowStyle}
                  rowTextStyle={dropdownStyles.dropdown2RowTxtStyle}
                />
              </ScrollView>
              <TextInput
                style={styles.input}
                placeholder="Description"
                autoCapitalize="none"
                placeholderTextColor="grey"
                onChangeText={(val) => setDescription(val)}
              />
              <Button
                icon="camera"
                onPress={() => setTakePicture(true)}
                style={styles.input}
              >
                Show it to us!
              </Button>
              <Button onPress={() => setSendReport(true)} style={styles.input}>
                Send report
              </Button>
            </View>
          </SafeAreaView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "grid",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 1,
    width: "100%",
    alignSelf: "flex-end",
    alignItems: "center",
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: "paper",
    margin: 10,
    padding: 8,
    color: "grey",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
    borderColor: "grey",
    borderWidth: 2,
  },
});

const dropdownStyles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#000" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
  },

  dropdown1BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },

  dropdown2BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#444",
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: { backgroundColor: "#444" },
  dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },

  dropdown3BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#444",
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3BtnTxt: {
    color: "#444",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: { backgroundColor: "slategray" },
  dropdown3RowStyle: {
    backgroundColor: "slategray",
    borderBottomColor: "#444",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    color: "#F1F1F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },

  dropdown4BtnStyle: {
    width: "50%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown4BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown4DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown4RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown4RowTxtStyle: { color: "#444", textAlign: "left" },
});

export { Reports };
