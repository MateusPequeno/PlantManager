import React, { useEffect } from 'react';
import {Welcome} from "./src/pages/Welcome";
import {UserIdentification} from "./src/pages/userIndentification";
import Routes from "./src/Routes";
//lídar com carregamento do app, de fontes por exemplo.
import AppLoading from 'expo-app-loading';
import {useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost';
import * as Notifications from 'expo-notifications';
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
  
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps
        //Detalhes da planta em notification
      }
    );
  },[])
  if(!fontsLoaded)
  return<AppLoading/>

  return (
  <Routes/>
  );
}
/*Para fazer a navegação precisamos do react-navigation 

yarn add @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated
 react-native-screens react-native-safe-area-context 
 @react-native-community/masked-view
//json-server ./src/services/server.json --host 192.168.0.10 --port 3333 --delay 700
 yarn add @react-navigation/stack
*/