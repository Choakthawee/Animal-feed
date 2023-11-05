import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

function FoodHistory() {
    const tableHead = ['ครั้งที่', 'วันที่', 'เวลา'];
    const tableData = [
        ['2023-11-06', '08:30 AM'],
        ['2023-11-06', '09:30 AM'],
        ['2023-11-06', '12:30 AM'],
        ['2023-11-07', '12:45 PM'],
        ['2023-11-08', '06:15 PM'],
    ];

    // สร้างตัวแปรสำหรับเก็บค่า (ครั้งที่) เริ่มต้นที่ 1
    let count = 1;

    // สร้าง Rows โดยเช็คว่าวันเปลี่ยนหรือไม่
    const rows = tableData.map((rowData, index) => {
        const date = rowData[0];
        // เช็คว่าวันเปลี่ยนหรือไม่ ถ้าเปลี่ยนให้นับครั้งที่ใหม่
        if (index > 0 && date !== tableData[index - 1][0]) {
            count = 1;
        }
        const newRowData = [count, ...rowData];
        count++; // เพิ่มค่า (ครั้งที่) สำหรับครั้งถัดไป
        return newRowData;
    });

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                <Rows data={rows} textStyle={styles.text} />
            </Table>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
});

export default FoodHistory;
