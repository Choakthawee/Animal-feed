import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home_screen from "../../screens/Home/home";
import Status_screen from "../../screens/Status/status";
import TimeSet from "../../screens/Feature/timeset";
import FoodHistory from '../../screens/Feature/food_history';
const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home_screen"
      shifting={true}
      sceneAnimationEnabled={false}
      activeColor="white"
      inactiveColor="white"
      barStyle={{ backgroundColor: '#263238' }}
    >
      <Tab.Screen
        name="Home"
        component={Home_screen}
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Status"
        component={Status_screen}
        options={{
          tabBarIcon: 'list-status',
        }}
      />
      <Tab.Screen
        name="TimeSet"
        component={TimeSet}
        options={{
          tabBarIcon: 'clock-time-eight',
        }}
      />
      <Tab.Screen
        name="FoodHistory"
        component={FoodHistory}
        options={{
          tabBarIcon: 'feature-search',
        }}
      />
    </Tab.Navigator>
  );
};