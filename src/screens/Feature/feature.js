import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, ScrollView } from "react-native";

function Feature_screen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity style={[styles.item, styles.shadowPlatform]}>
          <Text style={[styles.shadowText, { fontSize: 25, color: 'white' }]}>ประวัติการให้อาหาร</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Feature_screen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  item: {
    width: '100%',
    height: 200,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#455a64',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowPlatform: {
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 1.5, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  shadowText: {
    elevation: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1.5, height: 2 },
    textShadowRadius: 5,
  },
});
