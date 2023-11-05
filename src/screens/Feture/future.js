import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Feture_screen() {
  return (
    <View style={styles.container}>
      <Text>Feture</Text>
    </View>
  );
}

export default Feture_screen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34D399",
    alignItems: "center",
    justifyContent: "center",
  },
});
