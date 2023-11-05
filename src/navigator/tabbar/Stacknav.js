import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FoodHistory from '../../screens/Feature/screen-feature/food_history';

const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FoodHistory" component={FoodHistory} />
        </Stack.Navigator>
    );
}

export default StackNavigator;
