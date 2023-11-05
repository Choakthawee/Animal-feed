import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home_screen from "../../screens/Home/home";
import Status_screen from "../../screens/Status/status";
import Feature_screen from "../../screens/Feature/feature";

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home_screen"
      shifting={true}
      sceneAnimationEnabled={false}
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
        name="Feature"
        component={Feature_screen}
        options={{
          tabBarIcon: 'feature-search',
        }}
      />
    </Tab.Navigator>
  );
};