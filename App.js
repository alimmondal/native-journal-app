import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterPage from "./screens/RegisterPage";
import LoginPage from "./screens/LoginPage";
import auth from "@react-native-firebase/auth";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [initialising, setInitialising] = React.useState(true);
  const [user, setUser] = React.useState(false);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initialising) setInitialising(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!user ? (
          <>
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Signup" component={RegisterPage} />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
