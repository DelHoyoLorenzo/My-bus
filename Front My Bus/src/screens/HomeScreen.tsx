import { View, Text } from 'react-native'
import React from 'react'
import Map from '../components/Map'

import * as Location from 'expo-location';

export default function HomeScreen() {
  return (
    <View>
      <Map/>
    </View>
  )
}