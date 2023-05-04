import React from "react";
import { View, StyleSheet, Text } from "react-native";

import CurrentPollution from "./src/components/CurrentPollution";

const App = () => {
  return (
    <View styles={styles.container}>
      <CurrentPollution />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;