import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'

export default function NavigationStack() {
    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='Settings'>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Settings' component={SettingsScreen}/>
    </Stack.Navigator>
  )
}