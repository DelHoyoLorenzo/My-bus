import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTab";
import 'react-native-gesture-handler';
import NavigationDrawer from "./src/navigation/NavigationDrawer";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from "react";

import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState<null | {}>(null);
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
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationTab />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
