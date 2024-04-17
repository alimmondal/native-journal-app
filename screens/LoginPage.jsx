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

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressSignUp = () => {
    navigation.navigate("Signup");
  };

  const onPressLogin = async () => {
    if (email && password) {
      // call the function
      try {
        const userCred = await auth().signInWithEmailAndPassword(
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
        style={styles.input}
      />

      <TouchableOpacity onPress={onPressLogin} style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressSignUp} style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Go to Signup Screen
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

export default LoginPage;
