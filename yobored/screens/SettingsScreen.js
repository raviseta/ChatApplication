import React from "react";
import { FlatList } from "react-native-gesture-handler";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

const DATA = [
  {
    id: "1",
    userName: "Account",
    profileImage: require("../assets/settings_icon/profile.png"),
  },
  {
    id: "2",
    userName: "Web Login",
    profileImage: require("../assets/avatar.png"),
    time: "11:50 AM",
  },
  {
    id: "3",
    userName: "Moderation",
    profileImage: require("../assets/settings_icon/moderation.png"),
  },
  {
    id: "4",
    userName: "Dark Mode",
    profileImage: require("../assets/settings_icon/darkmode.png"),
  },
  {
    id: "5",
    userName: "Rate Us",
    profileImage: require("../assets/settings_icon/rateus.png"),
  },
  {
    id: "6",
    userName: "Report Bugs",
    profileImage: require("../assets/settings_icon/bug.png"),
  },
  {
    id: "7",
    userName: "Help",
    profileImage: require("../assets/avatar.png"),
  },
  {
    id: "38",
    userName: "Tell a Friend",
    profileImage: require("../assets/settings_icon/globe.png"),
  },
];

const Item = ({ userName, profileImage }) => (
  <View style={styles.container}>
    <View style={styles.cellContainer}>
      <Image style={styles.image} source={profileImage}></Image>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{userName}</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "flex-end",
          marginRight: 15,
        }}
      ></View>
    </View>
  </View>
);

const SettingsScreen = () => {
  const renderItem = ({ item }) => (
    <Item profileImage={item.profileImage} userName={item.userName} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  cellContainer: {
    flex: 1,
    flexDirection: "row",
    textAlign: "left",
    marginBottom: 10,
    marginLeft: 10,
    height: 50,
  },
  title: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  msgText: {
    fontSize: 14,
    marginLeft: 15,
  },
  time: {
    fontSize: 14,
    marginLeft: 15,
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default SettingsScreen;
