import React, { useContext, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import Icons from "react-native-vector-icons/MaterialIcons";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 64, marginLeft: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("signupScreen")}>
          <Icons
            name={"arrow-back"}
            size={30}
            color="#000"
            style={{ marginLeft: "3%" }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.image}
          resizeMode="center"
        ></Image>
        <View style={{ marginTop: 10 }}>
          <Text>Stories around the world</Text>
        </View>
      </View>
      <View style={styles.textFieldView}>
        <Text style={styles.textStyle}>Enter username</Text>
        <TextInput
          style={styles.textInput}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Username"
          underlineColorAndroid="transparent"
        />
        <Text style={styles.textDescription}>Forgot Username?</Text>

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
        <Text style={styles.textDescription}>Forgot Password?</Text>
      </View>

      <View style={styles.loginButtonSection}>
        <Button
          style={styles.buttonContainer}
          title="Login"
          buttonStyle={{ backgroundColor: "white" }}
          titleStyle={{
            color: "blue",
          }}
          onPress={() => navigation.navigate("cameraScreen")}
        ></Button>
      </View>

      <View style={styles.restoreText}>
        <Text
          style={styles.innerText}
          onPress={() => navigation.navigate("signupScreen")}
        >
          Restore account with mobile number
        </Text>
      </View>
      <View style={styles.revoeryText}>
        <Text>Only if you had set up recovery</Text>
      </View>
    </View>
  );
};

LoginScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  image: {
    width: 222,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "white",
  },
  imageContainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
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
    width: 100,
  },

  loginButtonSection: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  innerText: {
    color: "blue",
  },
  restoreText: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  revoeryText: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  textFieldView: {
    marginTop: 80,
  },
});

export default LoginScreen;
