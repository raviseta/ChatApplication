import React from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { color } from "react-native-elements/dist/helpers";

const DATA = [
  {
    id: "1",
    userName: "Ravi seta",
    message: "how are you",
    profileImage: require("../assets/avatar.png"),
    time: "11:50 AM",
  },
  {
    id: "2",
    userName: "Nidhi Roshaniya",
    message: "im fine",
    profileImage: require("../assets/avatar.png"),
    time: "11:50 AM",
  },
  {
    id: "3",
    userName: "kayra seta",
    message: "thank you",
    profileImage: require("../assets/avatar.png"),
    time: "11:50 AM",
  },
];
const Item = ({ userName, profileImage, message, time }) => (
  <View style={styles.container}>
    <View style={styles.cellContainer}>
      <Image style={styles.image} source={profileImage}></Image>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{userName}</Text>
        <Text style={styles.msgText}>{message}</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "flex-end",
          marginRight: 15,
        }}
      >
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  </View>
);

const ChatScreen = (props) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate({ routeName: "conversation" });
      }}
    >
      <Item
        profileImage={item.profileImage}
        userName={item.userName}
        message={item.message}
        time={item.time}
      />
    </TouchableOpacity>
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

ChatScreen.navigationOptions = () => {
  return {
    headerShown: true,
  };
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
    width: 50,
    height: 50,
  },
});

export default ChatScreen;
