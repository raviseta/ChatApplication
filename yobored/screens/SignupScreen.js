import React, { useContext, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { TextInput } from "react-native-gesture-handler";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Sign up</Text>
      </View>
      <View>
        <Text style={styles.textStyle}>Choose a username</Text>
        <TextInput
          style={styles.textInput}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Username"
          underlineColorAndroid="transparent"
        />
        <Text style={styles.textDescription}>
          Username must be atleast 3 characters...
        </Text>
        <Text style={styles.textStyle}>Enter password</Text>
        <TextInput
          secureTextEntry
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
        />
        <Text style={styles.textStyle}>Confirm password</Text>

        <TextInput
          secureTextEntry
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Confirm password"
        />
        <View style={styles.loginButtonSection}>
          <Button
            style={styles.buttonContainer}
            title="Sign Up"
            buttonStyle={{ backgroundColor: "white" }}
            titleStyle={{
              color: "blue",
            }}
          ></Button>
        </View>
      </View>

      <Text style={styles.link}>
        Already have an account?{" "}
        <Text
          style={styles.innerText}
          onPress={() => navigation.navigate("loginScreen")}
        >
          Login{" "}
        </Text>
        here.
      </Text>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "white",
  },
  textContainer: {
    marginTop: 64,
    alignItems: "center",
    marginBottom: 50,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "lightgray",
    borderRadius: 5,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },
  textDescription: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 10,
    color: "lightgray",
  },

  buttonContainer: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },

  loginButtonSection: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  innerText: {
    color: "blue",
  },
});

export default SignupScreen;
