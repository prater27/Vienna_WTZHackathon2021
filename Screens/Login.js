// SignUp.js
import React from "react";
import { View, Button, TextInput, StyleSheet, Image } from "react-native";
import bicycleImage from "../Assets/Images/bicycle.png";

function Login({ setRegistered }) {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  const [institutionCode, setInstitutionCode] = React.useState("");

  function signUp() {
    setRegistered(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={bicycleImage} style={styles.logo} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        placeholderTextColor="grey"
        onChangeText={(val) => setName(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Institution Code"
        autoCapitalize="none"
        placeholderTextColor="grey"
        onChangeText={(val) => setInstitutionCode(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="grey"
        onChangeText={(val) => setPass(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="grey"
        onChangeText={(val) => setConfirmPass(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor="grey"
        onChangeText={(val) => setEmail(val)}
      />
      <Button title="Sign Up" onPress={signUp} />
    </View>
  );
}

const styles = StyleSheet.create({
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
  logo: {
    width: "80%",
    height: "30%",
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { Login };
