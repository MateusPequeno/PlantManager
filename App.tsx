import React from 'react';
import {Welcome} from "./src/pages/Welcome";
import {UserIdentification} from "./src/pages/userIndentification";
import Routes from "./src/Routes";
//lídar com carregamento do app, de fontes por exemplo.
import AppLoading from 'expo-app-loading';
import {useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost';
export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

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

 yarn add @react-navigation/stack
*/