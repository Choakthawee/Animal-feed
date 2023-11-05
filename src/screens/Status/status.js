import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Status_screen() {
  return (
    <View style={styles.BG}>
      <View style={styles.bg_circleTem}>
        <View style={styles.circle}>
          <Text style={styles.text}>25°C</Text>
        </View>
      </View>
      <View style={styles.bg_circlefoodstocks}>
        <View style={styles.circle}>
          <Text style={styles.text}>FoodStocks out</Text>
        </View>
      </View>
      <View style={styles.bg_circlefoodtray}>
        <View style={styles.circle}>
          <Text style={styles.text}>Foodtray out</Text>
        </View>
      </View>
      <View style={styles.bg_circlePir}>
        <View style={styles.circle}>
          <Text style={styles.text}>Found something alive</Text>
        </View>
      </View>
      <View style={styles.bg_navbar} />
    </View>
  );
}

export default Status_screen;

const styles = StyleSheet.create({
  BG: {
    backgroundColor: "#b49c74",
    flex: 1,
    
  },
  bg_circleTem: {
    flex: 3,
    justifyContent: "flex-start",
    padding: 10,
    justifyContent:'center',
  },
  bg_circlefoodstocks: {
    flex: 3,
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'flex-end', 
    justifyContent:'center',
  },
  bg_circlefoodtray: {
    flex: 3,
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'flex-start', 
    justifyContent:'center',
  },
  bg_circlePir: {
    flex: 3,
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'flex-end',
    justifyContent:'center', 
  },
  bg_navbar: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 10,
    
  },
  circle: {
    width: 125,
    height: 125,
    borderRadius: 100,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth:4,
    borderColor:"#000000",

  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign:'center'
  },
});
