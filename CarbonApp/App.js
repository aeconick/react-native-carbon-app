import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthNavigator from './src/navigation/AuthNavigator';
import TabNavigator from './src/navigation/TabNavigator';

const App = () => {
  let isAuthenticated = false;
  let userData = null;

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem("userData");

      userData = JSON.parse(value);
      if (userData.email) {
        isAuthenticated = true;
      }

    } catch (e) {
      console.log(e);
    }
  };

  readData()
    .then(() => console.log(isAuthenticated))
    .catch((e) => console.log(e))
  //TODO: fix
  return (
    <NavigationContainer>
      {isAuthenticated && <AuthNavigator />}
      {!isAuthenticated && <TabNavigator />}
    </NavigationContainer>
  );
};

export default App;