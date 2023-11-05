import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

function TimeSet() {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleTimeChange = (event, selected) => {
    if (selected) {
      setSelectedTime(selected);
    }
    setShowPicker(false);
  };

  const showTimePicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={showTimePicker}>
        <Text style={{ fontSize: 24 }}>
          {selectedTime.toLocaleTimeString()}
        </Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
        />
      )}
    </View>
  );
}

export default TimeSet;
