import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	Button,
	StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

function TimeSet() {
	const [selectedTime, setSelectedTime] = useState(new Date());
	const [showPicker, setShowPicker] = useState(false);
	const [savedTimes, setSavedTimes] = useState([]);

	const storeData = async () => {
		try {
			await AsyncStorage.setItem('timeset', JSON.stringify(savedTimes));
			console.log(savedTimes);
		} catch (error) {
			// จัดการ error ที่เกิดขึ้น
		}
	};
	storeData();
	
	const handleTimeChange = (event, selected) => {
		if (selected) {
			setSelectedTime(selected);
		}
		setShowPicker(false);
	};

	const showTimePicker = () => {
		setShowPicker(true);
	};

	const saveTime = () => {
		const timeString = `${selectedTime.getHours()}:${selectedTime.getMinutes()}:${selectedTime.getSeconds()}`;
		setSavedTimes([...savedTimes, timeString]);
	};

	const deleteTime = (index) => {
		const updatedTimes = [...savedTimes];
		updatedTimes.splice(index, 1);
		setSavedTimes(updatedTimes);
	};

	return (
		<View style={styles.container}>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<Text style={{ fontSize: 30 }}>ตั้งเวลาให้อาหาร</Text>
			</View>
			<View style={{ flex: 1 }}>
				<TouchableOpacity onPress={showTimePicker}>
					<Text style={{ fontSize: 40 }}>
						{selectedTime.toLocaleTimeString()}
					</Text>
				</TouchableOpacity>
				<Button title="Save" onPress={saveTime} />
			</View>
			{showPicker && (
				<DateTimePicker
					value={selectedTime}
					mode="time"
					is24Hour={true}
					display="default"
					onChange={handleTimeChange}
				/>
			)}
			<FlatList
				style={styles.flatList}
				data={savedTimes}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) => (
					<View style={styles.listItem}>
					<Text>{`Saved Time ${index + 1}: ${item}`}</Text>
					<Button
						title="Delete"
						color="red"
						onPress={() => deleteTime(index)}
					/>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	flatList: {
		flex: 1,
	},
	listItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 5,
	},
});

export default TimeSet;
