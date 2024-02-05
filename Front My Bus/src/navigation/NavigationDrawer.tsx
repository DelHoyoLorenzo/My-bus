import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Drawer = createDrawerNavigator()

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='ProfileScreen' component={ProfileScreen} />
        <Drawer.Screen name='SettingsScreen' component={SettingsScreen} />
    </Drawer.Navigator>
  )
}