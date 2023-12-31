import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home_screen() {
	const animation = useSharedValue(0);
	const [isOffText, setIsOffText] = useState('OFF');
	const [setModeText, setSetModeText] = useState('Manual');
	const [isOff, setIsOff] = useState(true);
	const [servo, setServo] = useState('OFF');
	const [mode, setMode] = useState(0);
	const [modetime, setModeTime] = useState("1");
	const [settime, setSetTime] = useState("1");

	// useEffect(() => {
	// 	const retrieveData = async () => {
	// 		try {
	// 			const currentTime = new Date().toLocaleTimeString().toString();
	// 			const storedTimes = await AsyncStorage.getItem('timeset');

	// 			if (storedTimes !== null) {
	// 				const times = JSON.parse(storedTimes);
	// 				times.forEach(time => {
	// 					const timeArray = time.split(':');
	// 					const formattedHours = timeArray[0].padStart(2, '0');
	// 					const formattedMinutes = timeArray[1].padStart(2, '0');
	// 					const formattedSeconds = timeArray[2].padStart(2,'0');
	// 					const stringifiedTimes = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

	// 					// console.log('settime:', stringifiedTimes);
	// 					// console.log('currentTime:', currentTime);

	// 					if (currentTime == stringifiedTimes) {
	// 						setModeTime(0);
	// 						console.log("ทำ")
	// 					}else{
	// 						setModeTime(1);
	// 						console.log("ไม่ทำ")
	// 					}
	// 					setservo();
	// 				});
	// 			} else {
	// 				console.log('Stored time is null or undefined.');
	// 			}
	// 		} catch (error) {
	// 		}
	// 	};
	// 	retrieveData();
	// 	const interval = setInterval(retrieveData, 10000); // เรียกใช้ retrieveData() ทุก 3 วินาที

    // 	return () => clearInterval(interval);
	// },[setservo]);
	
	useEffect(() => {
		const interval = setInterval(() => {
			const retrieveData = async () => {
				try {
					const currentTime = new Date().toLocaleTimeString().toString();
					const storedTimes = await AsyncStorage.getItem('timeset');
	
					if (storedTimes !== null) {
						const times = JSON.parse(storedTimes);
						let timeArray;
						let formattedHours;
						let formattedMinutes;
						let formattedSeconds;
						let stringifiedTimes;
						times.forEach(time => {
							timeArray = time.split(':');
							formattedHours = timeArray[0].padStart(2, '0');
							formattedMinutes = timeArray[1].padStart(2, '0');
							formattedSeconds = timeArray[2].padStart(2,'0');
							stringifiedTimes = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
	
							// console.log('settime:', stringifiedTimes);
							// console.log('currentTime:', currentTime);	
						});
						if (currentTime == stringifiedTimes) {
							axios.post("http://192.168.43.113:3001/setmodetime", `timemode=0`)
							.then(re => {
							})
							console.log("ทำ")
							
						}else{
							setModeTime(1);
							console.log("ไม่ทำ")
							
						}
						setservo();
					} else {
						console.log('Stored time is null or undefined.');
					}
				} catch (error) {
				}
			};
			retrieveData();
		  
		}, 1000); 
	
		
		return () => clearInterval(interval); 
	  }, [setservo]);  
	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: animation.value }],
		};
	});

	const load = () => {
		axios.post("http://192.168.43.113:3001/setmodeservo", `type=${mode}&value=${servo === "OFF" ? "1" : "0"}`)
			.then(re => {
				// console.log(re.data)
			})
	}
	const setservo = () => {
		axios.post("http://192.168.43.113:3001/setmodetime", `timemode=${modetime}`)
			.then(re => {
				//console.log(re.data)
			})
	}
	
	const animationSwitch = () => {
		if (isOff) {
			animation.value = withTiming(144, { duration: 500 });
			setIsOff(false);
			setIsOffText('ON');
			setMode(1);

			setSetModeText('Auto');
			setServo('Auto');
		} else {
			animation.value = withTiming(0, { duration: 500 });
			setIsOff(true);
			setIsOffText('OFF');
			setMode(0);

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

	useEffect(() => {
		load();
	}, [servo, mode]);

	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text style={[styles.textHeader, styles.textModeSetting]}>Animal Feed App</Text>
			</View>
			<View style={styles.servoContainer}>
				<TouchableOpacity
					style={[styles.servoButton, styles.shadowPlatform, { backgroundColor: servo === 'ON' ? '#33b249' : servo === 'OFF' ? 'red' : '#263238', }]}
					onPress={() => { toggleServo(); }}
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
					style={[styles.modeButton, styles.shadowPlatform, { backgroundColor: '#263238' }]}
					onPress={() => { animationSwitch(); }}
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