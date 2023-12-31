import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import axios from "axios";
function Status_screen() {
	const [statusData, setStatusData] = useState({});
	const [servo, updateServo] = useState("");

	useEffect(() => {
		const load = async () => {
			try {
				const response = await axios.get("http://192.168.43.113:3001/status");
				const data = response.data;
				setStatusData(data.rows[0]);
				updateServo(data.v); // เรียกใช้ฟังก์ชันเพื่ออัปเดตค่า Servo
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		const interval = setInterval(() => {
			load();
		}, 2000);
		return () => clearInterval(interval);
	}, [setStatusData, updateServo]);

	const checkpir = () => {
		if (statusData.pir == 1) {
			return "มีสิ่งมีชีวิตอยู่แถวนี้";
		}
		else {
			return "ไม่มีสิ่งมีชีวิตอยู่แถวนี้";
		}
	}
	const checkfoodtray = () => {
		if (statusData.distance > 3) {
			return "อาหารหมดแล้ว";
		} else {
			return "อาหารยังไม่หมด";
		}
	}
	const checkservoenable = () => {
		if (statusData.servoauto == 0) {
			return "กำลังให้อาหาร";
		} else {
			return "พักการให้อาหาร";
		}
	}

	return (
		<View style={styles.BG}>
			<View style={styles.bg_circleTem}>
				<View style={styles.box_text}>
					<View style={styles.circle_out}>
						<View style={styles.circle_in}>
							<Text style={styles.h1}>อุณหภูมิ</Text>
						</View>
					</View>
					<View style={styles.bg_Text}>
						<Text style={styles.h2}>{statusData.temperature}°C</Text>
					</View>
				</View>
			</View>
			<View style={styles.bg_circlefoodstocks}>
				<View style={styles.box_textend}>
					<View style={styles.circle_out}>
						<View style={styles.circle_in}>
							<Text style={styles.h1}>สเตตัสที่ให้อาหาร</Text>
						</View>
					</View>
					<View style={styles.bg_Text}>
						<Text style={styles.h2}>{checkservoenable()}</Text>
					</View>
				</View>
			</View>
			<View style={styles.bg_circlefoodtray}>
				<View style={styles.box_text}>
					<View style={styles.circle_out}>
						<View style={styles.circle_in}>
							<Text style={styles.h1}>อาหารในถาด</Text>
						</View>
					</View>
					<View style={styles.bg_Text}>
						<Text style={styles.h2}>{checkfoodtray()}</Text>
					</View>
				</View>
			</View>
			<View style={styles.bg_circlePir}>
				<View style={styles.box_textend}>
					<View style={styles.circle_out}>
						<View style={styles.circle_in}>
							<Text style={styles.h1}>มีสิ่งมีชีวิตอยู่ไหม</Text>
						</View>
					</View>
					<View style={styles.bg_Text}>
						<Text style={styles.h2}>{checkpir()}</Text>
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
		justifyContent: "center",
	},
	bg_circlefoodstocks: {
		flex: 3,
		// backgroundColor: 'red',
		padding: 10,
		alignItems: "flex-end",
		justifyContent: "center",
	},
	bg_circlefoodtray: {
		flex: 3,
		//backgroundColor: 'green',
		padding: 10,
		alignItems: "flex-start",
		justifyContent: "center",
	},
	bg_circlePir: {
		flex: 3,
		// backgroundColor: 'blue',
		padding: 10,
		alignItems: "flex-end",
		justifyContent: "center",
	},
	bg_navbar: {
		flex: 1,
		//backgroundColor: 'yellow',
		padding: 10,
	},
	bg_Text: {
		flex: 1,
		justifyContent: "center",
	},
	circle_out: {
		width: 125,
		height: 125,
		borderRadius: 100,
		backgroundColor: "#7ae582",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 4,
		borderColor: "#fff",
		elevation: 10,
		shadowColor: "black",
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
		elevation: 10,
		shadowColor: "black",
		shadowOffset: { width: 1.5, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
	},
	box_text: {
		width: "95%",
		height: 125,
		backgroundColor: "#383f51",
		borderRadius: 100,
		elevation: 10,
		shadowColor: "black",
		shadowOffset: { width: 1.5, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		flexDirection: "row",
	},
	box_textend: {
		width: "95%",
		height: 125,
		backgroundColor: "#383f51",
		borderRadius: 100,
		elevation: 10,
		shadowColor: "black",
		shadowOffset: { width: 1.5, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		flexDirection: "row-reverse",
	},
	h1: {
		fontSize: 20,
		fontWeight: "bold",
		color: "black",
		textAlign: "center",
	},
	h2: {
		fontSize: 28,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
	},
});
