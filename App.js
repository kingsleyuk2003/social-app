import { useState, useEffect } from "react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "./screens/OnboardingScreen";
import LoginScreen from "./screens/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignupScreen from "./screens/SignupScreen";
import icon from 'react-native-vector-icons/FontAwesome'

const AppStack = createStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        const ans = AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerShown="false">
          <AppStack.Screen
            name="Onboarding"
            headerShown="false"
            component={OnboardingScreen}
            options={{ header: () => null }}
          />
          <AppStack.Screen
            name="Login"
            component={LoginScreen}          
          />
          <AppStack.Screen
            name="Signup"
            component={SignupScreen}
            options={({ navigation }) => ({
              title: "",
              headerStyle: {
                backgroundColor: "#f9fafd",
                shadowColor: "#f9fafd",
                elevation: 0,
              },
              headerLeft: () => (
                <View>
                  <FontAwesome.Button
                    name="long-arrow-left"
                    size={25}
                    backgroundColor="#f9fafd"
                    color="#333"
                    onPress={() => navigation.navigate("Login")}
                  />
                </View>
              ),
            })}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <LoginScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
