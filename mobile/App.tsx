import { StatusBar } from "react-native";
//import {  useRef, useEffect } from 'react';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_900Black,
  Inter_700Bold
} from "@expo-google-fonts/inter";
//import { Subscription } from 'expo-modules-core'

import { Routes } from "./src/routes/index";
import { Loading } from "./src/components/Loading";
import Background from "./src/components/Background";

//import './src/services/NotificationConfigs';
//import { getPushNotificationToken } from "./src/services/getPushNotificationToken";



export default function App() {
 
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_900Black,
    Inter_700Bold
  });

  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
