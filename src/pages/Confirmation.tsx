import React from 'react';
import {  Text,
   SafeAreaView
  ,StyleSheet 
  ,View} 
    from 'react-native';
import {Button} from '../components/Button';
import {useNavigation} from '@react-navigation/core';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){
  const navigation = useNavigation();
  function handleMoveOn () {
    navigation.navigate('PlantSelect');
  }
  return(
    <SafeAreaView style = {styles.container}>
      <View style = {styles.content}>
      <Text style = {styles.emoji}>
        😁
        </Text>
        <Text style = {styles.title}>
          Prontinho!
        </Text>
        <Text style = {styles.subtitle}>
        Agora vamos começar a {'\n'} 
        cuidar de suas plantas
        </Text>
        <View style = {styles.footer}>
      <Button 
      title = "Começar"
      onPress = {handleMoveOn}
      />
      </View>
      </View>
    
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex : 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content:{
    flex:1 ,
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%', 
    padding : 30,
  },
  title:{
    marginTop : 15, // Espaço o titulo do icone 
    fontSize: 22, 
    lineHeight : 38,
    textAlign:'center',
    color:colors.heading,
    fontFamily: fonts.heading
  },
  subtitle:{
    fontSize: 17, 
    paddingVertical : 10,
    textAlign:'center',
    color:colors.heading,
    fontFamily: fonts.text
  },
  footer:{
    width : '100%', 
    paddingHorizontal : 50,
    marginTop: 20,
  },
  emoji:{
    fontSize: 32,
  }
})