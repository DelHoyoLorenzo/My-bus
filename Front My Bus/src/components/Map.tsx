import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useState } from 'react'

import * as Location from 'expo-location';

export default function Map() {
    const [origin, setOrigin] = useState({
        latitude: -38.006225,
        longitude: -57.542940,
    })

    const [location, setLocation] = useState<null | any>(null);
    const [errorMsg, setErrorMsg] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <MapView style={{width:'100%', height: '100%'}}
    initialRegion={{
        latitude: location?.latitude,
        longitude: location?.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
    }} 
    >
        {/* <Marker 
        coordinate={{longitude: location?.longitude, latitude: location?.latitude}}/> */}
    </MapView>
  )
}