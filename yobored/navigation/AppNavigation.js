import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import CallsViewScreen from "../screens/CallsViewScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CameraScreen from "../screens/CameraScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChatScreen from "../screens/ChatScreen";
import ConversationScreen from "../screens/ConversationScreen";
import CallDetailScreen from "../screens/CallDetailScreen";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";

const ChatNavigator = createStackNavigator({
  Chats: ChatScreen,
  conversation: ConversationScreen,
});

const CallsNavigator = createStackNavigator({
  Calls: CallsViewScreen,
  callDetail: CallDetailScreen,
});

const SettingsNavigator = createStackNavigator({
  Settings: SettingsScreen,
});

const ProfileNavigator = createStackNavigator({
  Profile: ProfileScreen,
});

const tabScreenConfig = {
  callsScreen: {
    screen: CallsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-call-outline"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },

  chats: {
    screen: ChatNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-chatbox-outline"
            size={25}
            color={tabInfo.tintColor}
          />
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
  settingsScreen: {
    screen: SettingsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-settings-outline"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
  profileScreen: {
    screen: ProfileNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-person-outline"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
};

const AppNavigation = createSwitchNavigator({
  loginFlow: createStackNavigator({
    signupScreen: SignupScreen,
    loginScreen: LoginScreen,
  }),
  mainFlow: createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: { showLabel: false },
  }),
});

export default createAppContainer(AppNavigation);
