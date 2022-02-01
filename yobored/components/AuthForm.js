import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { View } from "react-native-web";
import color from "../constants/Color";

const AuthForm = ({ errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  
});

export default AuthForm;
