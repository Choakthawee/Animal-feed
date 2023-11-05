import React from "react";
import { Text, View, StyleSheet } from "react-native";

function History_screen() {
  return (
    <View style={styles.container}>
      <Text>History</Text>
    </View>
  );
}

export default History_screen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34D399",
    alignItems: "center",
    justifyContent: "center",
  },
});
