import React, { useState, useEffect, useCallback } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const ChatMessages = [
  {
    id: "u1",
    message: "hi",
    time: "11:50 AM",
    messageid: "m1",
  },
  {
    id: "u1",
    message: "how are you",
    time: "11:50 AM",
    messageid: "m2",
  },
  {
    id: "2",
    message: "im fine",
    time: "11:50 AM",
    messageid: "m3",
  },
  {
    id: "3",
    message: "thank you",
    time: "11:50 AM",
    messageid: "m4",
  },
];

const Item = ({ message, time }) => (
  <View style={styles.container}>
    <View style={styles.cellContainer}>
      <View style={{ flex: 1 }}>
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

const ConversationScreen = () => {
  const renderItem = ({ item }) => (
    <Item message={item.message} time={item.time} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ChatMessages}
        renderItem={renderItem}
        keyExtractor={(item) => item.messageid}
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

export default ConversationScreen;
