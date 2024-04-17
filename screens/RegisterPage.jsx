import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import auth from "@react-native-firebase/auth";

const RegisterPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressLoginScreen = () => {
    navigation.navigate("Login");
  };

  const onPressSignup = async () => {
    if (email && password) {
      // call the function
      try {
        const userCred = await auth().createUserWithEmailAndPassword(
          email,
          password
        );
        console.log(userCred);
      } catch (error) {
        console.log(error);
        Alert.alert(error.message);
      }
    } else {
      Alert.alert("Please fill the email and password fields");
    }
  };

  console.log({ email, password });

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        onChangeText={(text) => {
          setEmail(text);
        }}
        placeholder="email"
        style={styles.input}
      />
      <TextInput
        onChangeText={(text) => {
          setPassword(text);
        }}
        placeholder="password"
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity onPress={onPressSignup} style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressLoginScreen} style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Go to Login Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#ff5735",
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    marginBottom: 16,
  },
});

export default RegisterPage;
