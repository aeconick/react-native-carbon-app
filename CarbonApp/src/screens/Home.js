import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Slay</Text>
        <Text>10</Text>
        <Text>
          Air quality: <Text style={styles.quality}>Good</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  wrapper: {
  },
  container: {
    alignItems: "center",
  },
  quality: {
    color: 'green',
  }
})

export default Home;
