import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

function Home_screen() {
	const animation = useSharedValue(0);
	const [isOffText, setIsOffText] = useState('OFF');
	const [setModeText, setSetModeText] = useState('Auto');
	const [isOff, setIsOff] = useState(true);
	const [servo, setServo] = useState('OFF');

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: animation.value }],
		};
	});

	const btnBackgroundColor = isOff ? 'red' : '#33b249';

	const animationSwitch = () => {
		if (animation.value === 0) {
			animation.value = withTiming(144, { duration: 500 });
			setIsOff(false);
			setIsOffText('ON');
			setSetModeText('Auto');
			setServo('Auto');
		} else {
			animation.value = withTiming(0, { duration: 500 });
			setIsOff(true);
			setIsOffText('OFF');
			setSetModeText('Manual');
			setServo('OFF');
		}
	}

	const toggleServo = () => {
		if (servo === 'OFF') {
			setServo('ON');
		} else {
			setServo('OFF');
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text style={[styles.textHeader, styles.textModeSetting]}>Animal Feed App</Text>
			</View>
			<View style={styles.servoContainer}>
				<TouchableOpacity
					style={[styles.servoButton, styles.shadowPlatform]}
					onPress={toggleServo}
					disabled={setModeText === 'Auto'}
				>
					<Text style={[styles.servoText, styles.shadowSetting]}>
						{servo}
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.btnContainer}>
				<Text style={[styles.textMode, styles.textModeSetting]}>Mode: {setModeText}</Text>
				<TouchableOpacity
					style={[styles.modeButton, styles.shadowPlatform, { backgroundColor: btnBackgroundColor }]}
					onPress={animationSwitch}
				>
					<Animated.View style={[styles.animatedMode, animatedStyle]}>
						<Text style={[{ fontSize: 24, color: 'black' }, styles.textModeSetting]}>{isOffText}</Text>
					</Animated.View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default Home_screen;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		flex: 1,
		justifyContent: 'center',
	},
	servoContainer: {
		flex: 2,
		justifyContent: 'center',
	},
	servoButton: {
		width: 350,
		height: 350,
		backgroundColor: '#455a64',
		borderRadius: 200,
		borderWidth: 4,
		borderColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
	servoText: {
		color: 'white',
		fontSize: 70,
	},
	btnContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textMode: {
		fontSize: 24,
		color: 'black',
	},
	modeButton: {
		justifyContent: 'center',
		width: 250,
		height: 104,
		borderWidth: 3,
		borderRadius: 100,
		paddingLeft: 5,
		borderColor: 'white',
	},
	textModeSetting: {
		fontSize: 24,
		elevation: 10,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 1.5, height: 2 },
		textShadowRadius: 5,
	},
	textHeader: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	animatedMode: {
		width: 90,
		height: 90,
		borderRadius: 50,
		borderWidth: 0,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
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