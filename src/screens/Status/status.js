import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Status_screen() {
  return (
    <View style={styles.BG}>
      <View style={styles.bg_circleTem}>
        <View style={styles.box_text}>
          <View style={styles.circle_out}>
            <View style={styles.circle_in}>
              <Text style={styles.text}>25°C</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bg_circlefoodstocks}>
        <View style={styles.box_textend}>
          <View style={styles.circle_out}>
            <View style={styles.circle_in}>
              <Text style={styles.text}>FoodStocks out</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bg_circlefoodtray}>
        <View style={styles.box_text}>
          <View style={styles.circle_out}>
            <View style={styles.circle_in}>
              <Text style={styles.text}>Foodtray out</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bg_circlePir}>
        <View style={styles.box_textend}>
          <View style={styles.circle_out}>
            <View style={styles.circle_in}>
              <Text style={styles.text}>Found</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bg_navbar} />
    </View>
  );
}

export default Status_screen;

const styles = StyleSheet.create({
  BG: {
    backgroundColor: "#01161e",
    flex: 1,

  },
  bg_circleTem: {
    flex: 3,
    justifyContent: "flex-start",
    padding: 10,
    justifyContent: 'center',
  },
  bg_circlefoodstocks: {
    flex: 3,
    // backgroundColor: 'red',
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bg_circlefoodtray: {
    flex: 3,
    //backgroundColor: 'green',
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  bg_circlePir: {
    flex: 3,
    // backgroundColor: 'blue',
    padding: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bg_navbar: {
    flex: 1,
    //backgroundColor: 'yellow',
    padding: 10,

  },
  circle_out: {
    width: 125,
    height: 125,
    borderRadius: 100,
    backgroundColor: "#86F73C",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#fff",
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
		textShadowOffset: { width: 1.5, height: 2 },
		textShadowRadius: 5,
    shadowColor: 'black',
		shadowOffset: { width: 1.5, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
    
  },
  circle_in: {
    width: 110,
    height: 110,
    borderRadius: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#ffff",
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
		textShadowOffset: { width: 1.5, height: 2 },
		textShadowRadius: 5,
    shadowColor: 'black',
		shadowOffset: { width: 1.5, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
  },
  box_text: {
    width: 320,
    height: 125,
    backgroundColor: "#383f51",
    borderRadius: 100,
    elevation: 10,
		textShadowColor: 'rgba(0, 0, 0, 0.5)',
		textShadowOffset: { width: 1.5, height: 2 },
		textShadowRadius: 5,
    shadowColor: 'black',
		shadowOffset: { width: 1.5, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
  },
  box_textend: {
    width: 320,
    height: 125,
    backgroundColor: "#383f51",
    borderRadius: 100,
    alignItems:'flex-end',
    elevation: 10,
		textShadowColor: 'rgba(0, 0, 0, 0.5)',
		textShadowOffset: { width: 1.5, height: 2 },
		textShadowRadius: 5,
    shadowColor: 'black',
		shadowOffset: { width: 1.5, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: 'center'
  },
  shadowSetting: {
		elevation: 10,
		textShadowColor: 'rgba(0, 0, 0, 0.5)',
		textShadowOffset: { width: 1.5, height: 2 },
		textShadowRadius: 5,
	},
	shadowPlatform: {
		elevation: 5,
		shadowColor: 'black',
		shadowOffset: { width: 1.5, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
	},
});
