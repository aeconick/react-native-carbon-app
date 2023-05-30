import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthNavigator from './src/navigation/AuthNavigator';
import TabNavigator from './src/navigation/TabNavigator';

const App = () => {
  const [userData, setUserData] = useState(null);

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem("userData");

      setUserData(JSON.parse(value));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    readData();
  }, []);

  console.log(userData);

  return (
    <NavigationContainer>
      {userData?.email
        ? <TabNavigator />
        : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;