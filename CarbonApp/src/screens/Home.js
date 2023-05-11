import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage'; //TODO: DELETE

const Home = () => {
  let userData = null;

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem("userData");

      if (value) {
        userData = JSON.parse(value);
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  readData()
    .then(() => console.log("welcome home ->", userData))
    .catch((e) => console.log(e));
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});