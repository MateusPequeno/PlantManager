import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../styles/colors'
import fonts from '../styles/fonts';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/userIndentification';
import { Confirmation } from '../pages/Confirmation';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode = "none"
    screenOptions ={{
      cardStyle : {
        backgroundColor : colors.white
      }
    }}
   >
       <stackRoutes.Screen 
        name = "Welcome"
        component  = {Welcome}
       />
  
       <stackRoutes.Screen 
        name = "UserIdentification"
        component  = {UserIdentification}
       />
       <stackRoutes.Screen 
        name = "Confirmation"
        component  = {Confirmation}
       />

  </stackRoutes.Navigator>
)
export default AppRoutes;
/*Para fazer a navegação precisamos do react-navigation 

yarn add @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated
 react-native-screens react-native-safe-area-context 
 @react-native-community/masked-view

 yarn add @react-navigation/stack
*/