import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Budget from "./src/components/Budget";
import AddEmission from "./src/components/AddEmission";

const App = () => {
  return (
    <View styles={styles.container}>
      <AddEmission />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;