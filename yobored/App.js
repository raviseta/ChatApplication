import { StatusBar } from "expo-status-bar";
import { useState } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createSwitchNavigator } from "react-navigation";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import CameraScreen from "./screens/CameraScreen";
import { Provider as AuthProvider } from "./context/AuthContext";
import { Ionicons } from "@expo/vector-icons";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    signupScreen: SignupScreen,
    loginScreen: LoginScreen,
  }),
  mainFlow: createBottomTabNavigator(
    {
      chatScreen: {
        screen: ChatScreen,
        navigationOptions: {
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="tv-sharp" size={25} color={tabInfo.tintColor} />
            );
          },
        },
      },
      cameraScreen: {
        screen: CameraScreen,
        navigationOptions: {
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-camera" size={25} color={tabInfo.tintColor} />
            );
          },
        },
      },
    },
    {
      tabBarOptions: { showLabel: false },
    }
  ),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
