import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Table, Row, Rows } from "react-native-reanimated-table";
import axios from 'axios';
import { ScrollView } from "react-native";

function FoodHistory() {
	const [tableData, setTableData] = useState([]);
	
	const fetchData = async () => {
		try {
			const response = await axios.get("http://192.168.43.113:3001/date_time");
			const data = response.data;
			console.log(data);
			setTableData(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []); // Fetch data on initial component load

	const handleRefresh = () => {
		fetchData();
	};

	const rows = tableData.map((rowData, index) => {
		const num = index + 1;
		const date = rowData.date;
		const time = rowData.time;
		const newRowData = [num, date, time];
		return newRowData;
	});

	return (
		<ScrollView style={styles.container}>
			<View style={styles.buttonContainer}>
				<Button title="Refresh" onPress={handleRefresh} />
			</View>
			<Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
				<Row data={["ครั้งที่", "วันที่", "เวลา"]}  style={styles.head} textStyle={styles.text} />
				<Rows data={rows} textStyle={styles.text} />
			</Table>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 16,
	},
	head: { height: 40, backgroundColor: "#f1f8ff" },
	text: { margin: 6 },
	buttonContainer: {
		alignItems: 'center',
		marginBottom: 10,
	},
});

export default FoodHistory;
