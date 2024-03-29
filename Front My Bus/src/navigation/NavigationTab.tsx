import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'
import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator()

export default function NavigationTab() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='HomeScreen' component={HomeScreen} />
        <Tab.Screen name='ProfileScreen' component={ProfileScreen} />
        <Tab.Screen name='SettingScreen' component={SettingsScreen} />
    </Tab.Navigator>
  )
}