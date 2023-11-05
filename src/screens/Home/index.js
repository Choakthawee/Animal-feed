import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Home() {
	return (
		<View style={styles.container}>
			<Text style={{ color: "white" }}>Home</Text>
		</View>
	);
}

export default Home;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
		alignItems: "center",
		justifyContent: "center",
	},
});
