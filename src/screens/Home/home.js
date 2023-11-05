import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Home_screen() {
	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<Text>Button</Text>
			</View>
		</View>
	);
}

export default Home_screen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#dbbc8c",
		alignItems: "center",
		justifyContent: "center",
	},
});
