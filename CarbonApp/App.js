import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthNavigator from './src/navigation/AuthNavigator';
import TabNavigator from './src/navigation/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  let isAuthenticated = false;
  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);

      if (value !== null) {
        isAuthenticated = true;
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };
  console.log(isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated
        ? <TabNavigator />
        : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;