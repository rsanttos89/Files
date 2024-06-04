import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/** PAGES */
import Home from '../../screens/Home';
import Category from '../../screens/Category';

import CustomTabBar from '../../components/CustomTabBar';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
        }
      }}

      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: "list" as any
        }}
      />

      <Tab.Screen 
        name="Category" 
        component={Category}
        options={{
          tabBarIcon: "tags" as any
        }}
      />
    </Tab.Navigator>
  );
}
