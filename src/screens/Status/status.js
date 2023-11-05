import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Status_screen() {
  return (
    <View style={styles.container}>
      <Text>Status</Text>
    </View>
  );
}

export default Status_screen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#818CF8",
    alignItems: "center",
    justifyContent: "center",
  },
});
